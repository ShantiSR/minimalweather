package minimalweather

import (
        "os"
        "fmt"
        "log"
        "encoding/json"
	"github.com/garyburd/redigo/redis"
	"github.com/elcuervo/geoip"
)

const location_prefix = "mw:geolocator:"

var (
        geo_user = os.Getenv("GEOLOCATION_USER")
        geo_key = os.Getenv("GEOLOCATION_KEY")
)

func ClearGeolocationCache() {
	pattern := fmt.Sprintf("%s*", location_prefix)
	keys, err := redis.Values(c.Do("KEYS", pattern))

	if err != nil {
		log.Println(err)
	}

	for _, key := range keys {
		c.Do("DEL", key)
	}
}

func GetLocation(ip string) chan geoip.Geolocation {
        geo_chann := make(chan geoip.Geolocation)

	key := fmt.Sprintf("%s%s", location_prefix, ip)
	cached_geo , err := c.Do("GET", key)

	if err != nil {
		panic(err)
	}

        go func() {
                if cached_geo != nil {
                        var geolocation geoip.Geolocation
                        log.Println("Geo from cached")

			str, _ := redis.String(cached_geo, nil)
			bytes := []byte(str)
			json.Unmarshal(bytes, &geolocation)

                        geo_chann <- geolocation
                } else {
                        log.Println("Geo locating")
                        locator := geoip.GeoIP{geo_user, geo_key, true}
                        g := locator.FindCity(ip)
                        log.Println(ip)

			json_response, _ := json.Marshal(g)
			_, err := c.Do("SETEX", key, 200*60, json_response)

			if err != nil {
				panic(err)
			}

                        geo_chann <- g

                }
        }()

        return geo_chann
}
