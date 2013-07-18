var weatherAsIcon = function(text) {
  var icon = ")";

  switch(text) {
    case 'wind':                icon = "&#xe020;"; break;
    case 'sleet':               icon = "&#xe010;"; break;
    case 'thunderstorm':        icon = "&#xe00f;"; break;
    case 'snow':
    case 'hail':                icon = "&#xe00c;"; break;
    case 'cloudy':              icon = "&#xe00e;"; break;
    case 'rain':                icon = "&#xe008;"; break;
    case 'fog':                 icon = "&#xe014;"; break;
    case 'clear-day':           icon = "&#xe001;"; break;
    case 'clear-night':         icon = "&#xe002;"; break;
    case 'partly-cloudy-day':   icon = "&#xe000;"; break;
    case 'partly-cloudy-night': icon = "&#xe004;"; break;
    default:                    icon = "&#xe00d;";
  }

  return icon;
};

angular.module("weather", []);
angular.module("weather", []).filter("asWeather", function() { return weatherAsIcon; });

var minimalweather = angular.module("minimalweather", [
  "ngResource", "LocalStorageModule", "ngGeolocation", "weather"
]);

minimalweather.factory("Weather", function($resource, $http) {
  return {
    byName:   $resource("/weather/:city", { city: "@city" }),
    byCoords: $resource("/weather/:lat/:lng", { lat: "@lat", lng: "@lng" })
  }
});

var createAppIcon = function(iconFn, temperature, raining) {
  var appIcon = document.getElementById("ios_icon");
  var canvas = document.getElementById("ios_icon_generator")
  var units = {
    "C": "*",
    "F": "+"
  };

  canvas.setAttribute('width', 228);
  canvas.setAttribute('height', 228);

  var context = canvas.getContext("2d");
  var gradient = context.createLinearGradient(0, 0, 0, canvas.height);

  gradient.addColorStop(0, '#d55150');
  gradient.addColorStop(1, '#e47d43');

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  iconFn(context);

  if(raining) icons["umbrella"](context)

  context.fillStyle = "white";
  context.font = "bold 3em sans-serif"; // temperature
  context.textAlign = "right";

  context.fillText(temperature, 200, 50);
  context.scale(window.devicePixelRatio, window.devicePixelRatio);

  var data = canvas.toDataURL("image/png");
  appIcon.href = data;
};

var MainController = function($scope, $resource, localStorageService, Weather, geolocation) {
  $scope.loading = true;

  var generateIcon = function(city) {
    console.log("Generating Icon");
    createAppIcon(
      icons[city.weather.icon],
      Math.round(city.weather.temperature) + "°C",
      city.weather.bring_umbrella
    );
  };

  var locateVisitor = function() {
    var currentCity = localStorageService.get("currentCity");

    if(currentCity && currentCity.coordinates) {
      var lat = currentCity.coordinates.lat;
      var lng = currentCity.coordinates.lng;
      var city = Weather.byCoords.get({ lat: lat, lng: lng });

      console.log("Loaded from cache:", lat, lng);

      city.$then(function() {
        $scope.loading = false;
        generateIcon(city);
      });

      $scope.city = city;

      geolocation.position().then(function(geo) {
        var currentCity = localStorageService.get("currentCity");

        var equalLat = geo.coords.latitude.toFixed(2) == currentCity.coordinates.lat.toFixed(2);
        var equalLng = geo.coords.longitude.toFixed(2) == currentCity.coordinates.lng.toFixed(2);

        if(!equalLat || !equalLng) {
          var city = Weather.byCoords.get({
            lat: geo.coords.latitude,
            lng: geo.coords.longitude
          });

          console.log("The location changed!, relocating");

          city.$then(function() {
            localStorageService.add("currentCity", city);
            generateIcon(city);
            location.reload();
          });

        }
      });

    } else {
      geolocation.position().then(function(geo) {
        var lat = geo.coords.latitude;
        var lng = geo.coords.longitude;
        var city = Weather.byCoords.get({ lat: lat, lng: lng });

        console.log("Seek for geolocation:", lat, lng);

        city.$then(function() {
          generateIcon(city);
          localStorageService.add("currentCity", city)
        });

        $scope.city = city;
      });
    }
  }

  locateVisitor();

  $scope.clear = function() {
    console.log("Deleted cache");
    localStorageService.remove("currentCity");
    locateVisitor();
  }

  $scope.search = function() {
    $scope.loading = true;
    var city = Weather.byName.get({ city: this.city.name });
    console.log("Searching by city name:", this.city.name);

    city.$then(function() {
      generateIcon(city);
      localStorageService.add("currentCity", city);
      $scope.loading = false;
      location.reload();
    });

    $scope.city = city;
  }
}

minimalweather.run(function($resource) { });
