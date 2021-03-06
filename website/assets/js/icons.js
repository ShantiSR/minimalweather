var icons = {
  "wind": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(431,192);
    ctx.bezierCurveTo(404.5,192,383,213.5,383,240);
    ctx.bezierCurveTo(383,245.646,384.167,250.958,385.938,256);
    ctx.lineTo(79,256);
    ctx.bezierCurveTo(70.167,256,63,263.167,63,272);
    ctx.bezierCurveTo(63,280.833,70.167,288,79,288);
    ctx.lineTo(431,288);
    ctx.bezierCurveTo(457.5,288,479,266.5,479,240);
    ctx.bezierCurveTo(479,213.5,457.5,192,431,192);
    ctx.closePath();
    ctx.moveTo(79,224);
    ctx.lineTo(271,224);
    ctx.bezierCurveTo(297.5,224,319,202.5,319,176);
    ctx.bezierCurveTo(319,149.5,297.5,128,271,128);
    ctx.bezierCurveTo(244.5,128,223,149.5,223,176);
    ctx.bezierCurveTo(223,181.646,224.167,186.958,225.938,192);
    ctx.lineTo(79,192);
    ctx.bezierCurveTo(70.167,192,63,199.167,63,208);
    ctx.bezierCurveTo(63,216.833,70.167,224,79,224);
    ctx.closePath();
    ctx.moveTo(335,320);
    ctx.bezierCurveTo(334.062,320,333.166,320.208,332.209,320.291);
    ctx.bezierCurveTo(331.584,320.25,331.063,320,330.438,320);
    ctx.lineTo(83.584,320);
    ctx.bezierCurveTo(72.209,320,63,327.167,63,336);
    ctx.bezierCurveTo(63,344.833,72.209,352,83.584,352);
    ctx.lineTo(289.938,352);
    ctx.bezierCurveTo(288.167,357.042,287,362.376,287,368);
    ctx.bezierCurveTo(287,394.5,308.5,416,335,416);
    ctx.bezierCurveTo(361.5,416,383,394.5,383,368);
    ctx.bezierCurveTo(383,341.5,361.5,320,335,320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "sleet": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(400,64);
    ctx.bezierCurveTo(394.688,64,389.438,64.375,384.208,65.125);
    ctx.bezierCurveTo(354.334,24.417,307.188,0,256,0);
    ctx.bezierCurveTo(204.812,0,157.688,24.417,127.792,65.125);
    ctx.bezierCurveTo(122.562,64.375,117.312,64,112,64);
    ctx.bezierCurveTo(50.25,64,0,114.25,0,176);
    ctx.bezierCurveTo(0,237.75,50.25,288,112,288);
    ctx.bezierCurveTo(125.688,288,139.084,285.5,151.709,280.667);
    ctx.bezierCurveTo(180.666,305.917,217.5,320,256,320);
    ctx.bezierCurveTo(294.54200000000003,320,331.33299999999997,305.917,360.291,280.66700000000003);
    ctx.bezierCurveTo(372.916,285.5,386.312,288,400,288);
    ctx.bezierCurveTo(461.75,288,512,237.75,512,176);
    ctx.bezierCurveTo(512,114.25,461.75,64,400,64);
    ctx.closePath();
    ctx.moveTo(96,320);
    ctx.bezierCurveTo(78.312,320,64,334.312,64,352);
    ctx.bezierCurveTo(64,369.688,78.312,384,96,384);
    ctx.bezierCurveTo(113.688,384,128,369.688,128,352);
    ctx.bezierCurveTo(128,334.312,113.688,320,96,320);
    ctx.closePath();
    ctx.moveTo(256,352);
    ctx.bezierCurveTo(238.312,352,224,366.312,224,384);
    ctx.bezierCurveTo(224,401.688,238.312,416,256,416);
    ctx.bezierCurveTo(273.688,416,288,401.688,288,384);
    ctx.bezierCurveTo(288,366.312,273.688,352,256,352);
    ctx.closePath();
    ctx.moveTo(416,320);
    ctx.bezierCurveTo(398.312,320,384,334.312,384,352);
    ctx.bezierCurveTo(384,369.688,398.312,384,416,384);
    ctx.bezierCurveTo(433.688,384,448,369.688,448,352);
    ctx.bezierCurveTo(448,334.312,433.688,320,416,320);
    ctx.closePath();
    ctx.moveTo(352,448);
    ctx.bezierCurveTo(334.312,448,320,462.312,320,480);
    ctx.bezierCurveTo(320,497.688,334.312,512,352,512);
    ctx.bezierCurveTo(369.688,512,384,497.688,384,480);
    ctx.bezierCurveTo(384,462.312,369.688,448,352,448);
    ctx.closePath();
    ctx.moveTo(160,448);
    ctx.bezierCurveTo(142.312,448,128,462.312,128,480);
    ctx.bezierCurveTo(128,497.688,142.312,512,160,512);
    ctx.bezierCurveTo(177.688,512,192,497.688,192,480);
    ctx.bezierCurveTo(192,462.312,177.688,448,160,448);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "thunderstorm": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(512,134.833);
    ctx.bezierCurveTo(512,85.687,472,45.709,422.83299999999997,45.709);
    ctx.bezierCurveTo(420.43699999999995,45.709,418.06199999999995,45.792,415.68699999999995,45.979000000000006);
    ctx.bezierCurveTo(392.562,17.146,357.709,0,320,0);
    ctx.bezierCurveTo(282.312,0,247.438,17.146,224.312,45.979);
    ctx.bezierCurveTo(221.937,45.792,219.54100000000003,45.708999999999996,217.12400000000002,45.708999999999996);
    ctx.bezierCurveTo(168,45.709,128,85.688,128,134.833);
    ctx.bezierCurveTo(128,139.97899999999998,128.688,144.958,129.5,149.875);
    ctx.bezierCurveTo(128.958,150.583,128.312,151.229,127.792,151.958);
    ctx.bezierCurveTo(122.563,151.208,117.313,150.833,112,150.833);
    ctx.bezierCurveTo(50.25,150.833,0,201.083,0,262.83299999999997);
    ctx.bezierCurveTo(0,324.58399999999995,50.25,374.83299999999997,112,374.83299999999997);
    ctx.bezierCurveTo(125.688,374.83299999999997,139.084,372.33399999999995,151.709,367.49999999999994);
    ctx.bezierCurveTo(170.063,383.49999999999994,191.813,394.43799999999993,214.916,400.70799999999997);
    ctx.lineTo(192,416);
    ctx.lineTo(224,448);
    ctx.lineTo(192,512);
    ctx.lineTo(288,448);
    ctx.lineTo(256,416);
    ctx.lineTo(260.812,406.417);
    ctx.bezierCurveTo(297.562,405.292,332.562,391.688,360.291,367.5);
    ctx.bezierCurveTo(372.916,372.334,386.312,374.833,400,374.833);
    ctx.bezierCurveTo(461.75,374.833,512,324.584,512,262.833);
    ctx.bezierCurveTo(512,237.16700000000003,502.958,213.75000000000003,488.334,194.83300000000003);
    ctx.bezierCurveTo(502.916,178.958,512,158.021,512,134.833);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  },

  "snow": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(326.042,443.688);
    ctx.lineTo(308.042,433.312);
    ctx.bezierCurveTo(308.58399999999995,430.188,309,427.00100000000003,309,423.688);
    ctx.bezierCurveTo(309,420.376,308.584,417.188,308,414.063);
    ctx.lineTo(326.04200000000003,403.667);
    ctx.bezierCurveTo(334.459,398.75,337.333,387.938,332.50000000000006,379.563);
    ctx.bezierCurveTo(327.6240000000001,371.084,316.8330000000001,368.188,308.37500000000006,373.063);
    ctx.lineTo(290.18700000000007,383.563);
    ctx.bezierCurveTo(285.3110000000001,379.417,279.81200000000007,376.167,273.68700000000007,373.959);
    ctx.lineTo(273.68700000000007,353.063);
    ctx.bezierCurveTo(273.68700000000007,343.292,265.7490000000001,335.375,255.99900000000008,335.375);
    ctx.bezierCurveTo(246.24900000000008,335.375,238.33300000000008,343.292,238.33300000000008,353.063);
    ctx.lineTo(238.33300000000008,373.938);
    ctx.bezierCurveTo(232.20700000000008,376.126,226.68700000000007,379.417,221.81200000000007,383.563);
    ctx.lineTo(203.66600000000005,373.063);
    ctx.bezierCurveTo(195.18700000000007,368.188,184.37400000000005,371.063,179.49900000000005,379.542);
    ctx.bezierCurveTo(174.62400000000005,387.95899999999995,177.56100000000006,398.792,185.99900000000005,403.66799999999995);
    ctx.lineTo(203.95800000000006,414.04299999999995);
    ctx.bezierCurveTo(203.37400000000005,417.18899999999996,202.99900000000005,420.37699999999995,202.99900000000005,423.68899999999996);
    ctx.bezierCurveTo(202.99900000000005,427.00199999999995,203.37400000000005,430.18899999999996,203.95800000000006,433.313);
    ctx.lineTo(186,443.688);
    ctx.bezierCurveTo(177.541,448.563,174.625,459.438,179.5,467.876);
    ctx.bezierCurveTo(184.375,476.31399999999996,195.188,479.188,203.625,474.31399999999996);
    ctx.lineTo(221.792,463.876);
    ctx.bezierCurveTo(226.666,468.001,232.188,471.251,238.334,473.438);
    ctx.lineTo(238.334,494.376);
    ctx.bezierCurveTo(238.334,504.125,246.25,512,256,512);
    ctx.bezierCurveTo(265.75,512,273.688,504.125,273.688,494.376);
    ctx.lineTo(273.688,473.438);
    ctx.bezierCurveTo(279.813,471.25,285.376,468,290.209,463.813);
    ctx.lineTo(308.376,474.313);
    ctx.bezierCurveTo(316.834,479.188,327.625,476.313,332.501,467.875);
    ctx.bezierCurveTo(337.375,459.438,334.5,448.625,326.042,443.688);
    ctx.closePath();
    ctx.moveTo(256,441.375);
    ctx.bezierCurveTo(246.25,441.375,238.312,433.437,238.312,423.687);
    ctx.bezierCurveTo(238.312,413.937,246.25,406.041,256,406.041);
    ctx.bezierCurveTo(265.75,406.041,273.66700000000003,413.937,273.66700000000003,423.687);
    ctx.bezierCurveTo(273.66700000000003,433.437,265.75,441.375,256,441.375);
    ctx.closePath();
    ctx.moveTo(474.166,396.25);
    ctx.lineTo(462.08299999999997,393.042);
    ctx.bezierCurveTo(461.792,389.20899999999995,460.87499999999994,385.563,459.18699999999995,382.063);
    ctx.lineTo(467.95799999999997,373.292);
    ctx.bezierCurveTo(472.08299999999997,369.167,472.06199999999995,362.5,467.95799999999997,358.438);
    ctx.bezierCurveTo(463.87499999999994,354.334,457.24999999999994,354.313,453.12499999999994,358.438);
    ctx.lineTo(444.33399999999995,367.188);
    ctx.bezierCurveTo(440.87499999999994,365.563,437.18799999999993,364.626,433.37499999999994,364.313);
    ctx.lineTo(430.16599999999994,352.251);
    ctx.bezierCurveTo(428.6669999999999,346.66799999999995,422.91599999999994,343.313,417.2919999999999,344.813);
    ctx.bezierCurveTo(411.68799999999993,346.334,408.4169999999999,352.084,409.87499999999994,357.688);
    ctx.lineTo(413.08399999999995,369.584);
    ctx.bezierCurveTo(411.49999999999994,370.668,409.99999999999994,371.876,408.58399999999995,373.251);
    ctx.bezierCurveTo(407.20899999999995,374.66799999999995,406.042,376.167,404.95799999999997,377.71);
    ctx.lineTo(393.06199999999995,374.501);
    ctx.bezierCurveTo(387.45799999999997,373.00199999999995,381.66599999999994,376.37699999999995,380.16599999999994,381.93899999999996);
    ctx.bezierCurveTo(378.6669999999999,387.56399999999996,382.0419999999999,393.29299999999995,387.5829999999999,394.81399999999996);
    ctx.lineTo(399.5829999999999,398.04299999999995);
    ctx.bezierCurveTo(399.9169999999999,401.81399999999996,400.8749999999999,405.501,402.5619999999999,409.00199999999995);
    ctx.lineTo(393.7499999999999,417.81399999999996);
    ctx.bezierCurveTo(389.66699999999986,421.91799999999995,389.6879999999999,428.54299999999995,393.79199999999986,432.626);
    ctx.bezierCurveTo(397.8749999999999,436.709,404.4999999999999,436.751,408.58399999999983,432.66799999999995);
    ctx.lineTo(417.4159999999998,423.8349999999999);
    ctx.bezierCurveTo(420.87499999999983,425.5419999999999,424.58399999999983,426.5009999999999,428.4169999999998,426.7919999999999);
    ctx.lineTo(431.5829999999998,438.81299999999993);
    ctx.bezierCurveTo(433.1249999999998,444.4169999999999,438.8329999999998,447.7509999999999,444.4589999999998,446.2509999999999);
    ctx.bezierCurveTo(450.0419999999998,444.7509999999999,453.41599999999977,439.0019999999999,451.9169999999998,433.33399999999995);
    ctx.lineTo(448.7079999999998,421.43799999999993);
    ctx.bezierCurveTo(450.2079999999998,420.3759999999999,451.7499999999998,419.18799999999993,453.1669999999998,417.81299999999993);
    ctx.bezierCurveTo(454.5419999999998,416.4169999999999,455.7089999999998,414.87499999999994,456.7909999999998,413.33399999999995);
    ctx.lineTo(468.7079999999998,416.54299999999995);
    ctx.bezierCurveTo(474.3119999999998,418.04299999999995,480.0829999999998,414.68899999999996,481.5619999999998,409.126);
    ctx.bezierCurveTo(483.062,403.541,479.75,397.792,474.166,396.25);
    ctx.closePath();
    ctx.moveTo(438.312,402.938);
    ctx.bezierCurveTo(434.187,407.063,427.541,407.042,423.437,402.938);
    ctx.bezierCurveTo(419.375,398.876,419.333,392.209,423.437,388.084);
    ctx.bezierCurveTo(427.541,384.001,434.208,384.001,438.312,388.084);
    ctx.bezierCurveTo(442.375,392.188,442.375,398.875,438.312,402.938);
    ctx.closePath();
    ctx.moveTo(118.938,342.5);
    ctx.lineTo(107.063,345.688);
    ctx.bezierCurveTo(105.959,344.188,104.813,342.667,103.417,341.25);
    ctx.bezierCurveTo(102.001,339.875,100.501,338.688,98.938,337.625);
    ctx.lineTo(102.126,325.687);
    ctx.bezierCurveTo(103.626,320.083,100.292,314.312,94.751,312.833);
    ctx.bezierCurveTo(89.126,311.333,83.376,314.66700000000003,81.876,320.25);
    ctx.lineTo(78.626,332.312);
    ctx.bezierCurveTo(74.81400000000001,332.624,71.168,333.562,67.688,335.208);
    ctx.lineTo(58.876000000000005,326.437);
    ctx.bezierCurveTo(54.751000000000005,322.312,48.126000000000005,322.333,44.042,326.437);
    ctx.bezierCurveTo(39.938,330.541,39.938,337.187,44.042,341.291);
    ctx.lineTo(52.813,350.062);
    ctx.bezierCurveTo(51.167,353.562,50.209,357.25,49.917,361.041);
    ctx.lineTo(37.875,364.249);
    ctx.bezierCurveTo(32.25,365.791,28.916,371.499,30.417,377.124);
    ctx.bezierCurveTo(31.938000000000002,382.70700000000005,37.688,385.999,43.313,384.541);
    ctx.lineTo(55.188,381.311);
    ctx.bezierCurveTo(56.25,382.91499999999996,57.438,384.416,58.876000000000005,385.81199999999995);
    ctx.bezierCurveTo(60.251000000000005,387.18699999999995,61.751000000000005,388.41599999999994,63.31400000000001,389.43699999999995);
    ctx.lineTo(60.126000000000005,401.33299999999997);
    ctx.bezierCurveTo(58.626000000000005,406.95799999999997,61.96000000000001,412.74999999999994,67.542,414.24999999999994);
    ctx.bezierCurveTo(73.168,415.74999999999994,78.876,412.4169999999999,80.376,406.81199999999995);
    ctx.lineTo(83.626,394.81199999999995);
    ctx.bezierCurveTo(87.438,394.49999999999994,91.126,393.54099999999994,94.626,391.87399999999997);
    ctx.lineTo(103.417,400.66599999999994);
    ctx.bezierCurveTo(107.501,404.78999999999996,114.126,404.70699999999994,118.251,400.62399999999997);
    ctx.bezierCurveTo(122.313,396.56199999999995,122.376,389.91599999999994,118.251,385.81199999999995);
    ctx.lineTo(109.43900000000001,376.99999999999994);
    ctx.bezierCurveTo(111.12700000000001,373.53999999999996,112.12700000000001,369.81199999999995,112.37700000000001,365.99899999999997);
    ctx.lineTo(124.43900000000001,362.811);
    ctx.bezierCurveTo(130.001,361.28999999999996,133.335,355.561,131.835,349.936);
    ctx.bezierCurveTo(130.334,344.376,124.584,341.042,118.938,342.5);
    ctx.closePath();
    ctx.moveTo(88.562,370.958);
    ctx.bezierCurveTo(84.458,375.062,77.812,375.062,73.687,370.958);
    ctx.bezierCurveTo(69.625,366.875,69.625,360.187,73.687,356.125);
    ctx.bezierCurveTo(77.812,352.042,84.458,352.042,88.562,356.125);
    ctx.bezierCurveTo(92.666,360.208,92.625,366.875,88.562,370.958);
    ctx.closePath();
    ctx.moveTo(512,176);
    ctx.bezierCurveTo(512,114.25,461.75,64,400,64);
    ctx.bezierCurveTo(394.688,64,389.438,64.375,384.208,65.125);
    ctx.bezierCurveTo(354.334,24.417,307.188,0,256,0);
    ctx.bezierCurveTo(204.812,0,157.688,24.417,127.792,65.125);
    ctx.bezierCurveTo(122.562,64.375,117.312,64,112,64);
    ctx.bezierCurveTo(50.25,64,0,114.25,0,176);
    ctx.bezierCurveTo(0,237.75,50.25,288,112,288);
    ctx.bezierCurveTo(125.688,288,139.084,285.5,151.709,280.667);
    ctx.bezierCurveTo(180.666,305.917,217.5,320,256,320);
    ctx.bezierCurveTo(294.54200000000003,320,331.33299999999997,305.917,360.291,280.66700000000003);
    ctx.bezierCurveTo(372.916,285.5,386.312,288,400,288);
    ctx.bezierCurveTo(461.75,288,512,237.75,512,176);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "cloudy": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(488.334,247.417);
    ctx.bezierCurveTo(502.958,266.333,512,289.729,512,315.41700000000003);
    ctx.bezierCurveTo(512,377.16600000000005,461.75,427.41700000000003,400,427.41700000000003);
    ctx.bezierCurveTo(386.312,427.41700000000003,372.916,424.91700000000003,360.291,420.084);
    ctx.bezierCurveTo(331.33299999999997,445.333,294.54200000000003,459.41700000000003,256,459.41700000000003);
    ctx.bezierCurveTo(217.5,459.41700000000003,180.666,445.333,151.709,420.08400000000006);
    ctx.bezierCurveTo(139.084,424.9170000000001,125.688,427.4170000000001,112,427.4170000000001);
    ctx.bezierCurveTo(50.25,427.4170000000001,0,377.1660000000001,0,315.4170000000001);
    ctx.bezierCurveTo(0,253.6670000000001,50.25,203.4170000000001,112,203.4170000000001);
    ctx.bezierCurveTo(117.312,203.4170000000001,122.562,203.7920000000001,127.792,204.5420000000001);
    ctx.bezierCurveTo(128.313,203.81300000000007,128.958,203.1670000000001,129.5,202.4590000000001);
    ctx.bezierCurveTo(128.688,197.5210000000001,128,192.5630000000001,128,187.4180000000001);
    ctx.bezierCurveTo(128,138.2510000000001,168,98.27200000000009,217.125,98.27200000000009);
    ctx.bezierCurveTo(219.541,98.27200000000009,221.937,98.37600000000009,224.313,98.56400000000009);
    ctx.bezierCurveTo(247.438,69.7100000000001,282.313,52.58500000000009,320.001,52.58500000000009);
    ctx.bezierCurveTo(357.71,52.58500000000009,392.563,69.7100000000001,415.68899999999996,98.56400000000009);
    ctx.bezierCurveTo(418.06399999999996,98.37600000000009,420.43899999999996,98.27200000000009,422.835,98.27200000000009);
    ctx.bezierCurveTo(472,98.271,512,138.25,512,187.417);
    ctx.bezierCurveTo(512,210.583,502.916,231.521,488.334,247.417);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  },

  "rain": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(400,64);
    ctx.bezierCurveTo(394.688,64,389.438,64.375,384.208,65.125);
    ctx.bezierCurveTo(354.334,24.417,307.188,0,256,0);
    ctx.bezierCurveTo(204.812,0,157.688,24.417,127.792,65.125);
    ctx.bezierCurveTo(122.562,64.375,117.312,64,112,64);
    ctx.bezierCurveTo(50.25,64,0,114.25,0,176);
    ctx.bezierCurveTo(0,237.75,50.25,288,112,288);
    ctx.bezierCurveTo(125.688,288,139.084,285.5,151.709,280.667);
    ctx.bezierCurveTo(180.666,305.917,217.5,320,256,320);
    ctx.bezierCurveTo(294.54200000000003,320,331.33299999999997,305.917,360.291,280.66700000000003);
    ctx.bezierCurveTo(372.916,285.5,386.312,288,400,288);
    ctx.bezierCurveTo(461.75,288,512,237.75,512,176);
    ctx.bezierCurveTo(512,114.25,461.75,64,400,64);
    ctx.closePath();
    ctx.moveTo(225,480);
    ctx.bezierCurveTo(225,497.688,239.312,512,257,512);
    ctx.bezierCurveTo(274.688,512,289,497.688,289,480);
    ctx.bezierCurveTo(289,462.312,257,416,257,416);
    ctx.bezierCurveTo(257,416,225,462.312,225,480);
    ctx.closePath();
    ctx.moveTo(352,448);
    ctx.bezierCurveTo(352,465.688,366.312,480,384,480);
    ctx.bezierCurveTo(401.688,480,416,465.688,416,448);
    ctx.bezierCurveTo(416,430.312,384,384,384,384);
    ctx.bezierCurveTo(384,384,352,430.312,352,448);
    ctx.closePath();
    ctx.moveTo(96,384);
    ctx.bezierCurveTo(96,401.688,110.312,416,128,416);
    ctx.bezierCurveTo(145.688,416,160,401.688,160,384);
    ctx.bezierCurveTo(160,366.312,128,320,128,320);
    ctx.bezierCurveTo(128,320,96,366.312,96,384);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "fog": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(112,160);
    ctx.lineTo(400,160);
    ctx.bezierCurveTo(408.833,160,416,152.833,416,144);
    ctx.bezierCurveTo(416,135.167,408.833,128,400,128);
    ctx.lineTo(112,128);
    ctx.bezierCurveTo(103.167,128,96,135.167,96,144);
    ctx.bezierCurveTo(96,152.833,103.167,160,112,160);
    ctx.closePath();
    ctx.moveTo(400,192);
    ctx.lineTo(112,192);
    ctx.bezierCurveTo(103.167,192,96,199.167,96,208);
    ctx.bezierCurveTo(96,216.833,103.167,224,112,224);
    ctx.lineTo(400,224);
    ctx.bezierCurveTo(408.833,224,416,216.833,416,208);
    ctx.bezierCurveTo(416,199.167,408.833,192,400,192);
    ctx.closePath();
    ctx.moveTo(400,256);
    ctx.lineTo(112,256);
    ctx.bezierCurveTo(103.167,256,96,263.167,96,272);
    ctx.bezierCurveTo(96,280.833,103.167,288,112,288);
    ctx.lineTo(400,288);
    ctx.bezierCurveTo(408.833,288,416,280.833,416,272);
    ctx.bezierCurveTo(416,263.167,408.833,256,400,256);
    ctx.closePath();
    ctx.moveTo(400,320);
    ctx.lineTo(112,320);
    ctx.bezierCurveTo(103.167,320,96,327.167,96,336);
    ctx.bezierCurveTo(96,344.833,103.167,352,112,352);
    ctx.lineTo(400,352);
    ctx.bezierCurveTo(408.833,352,416,344.833,416,336);
    ctx.bezierCurveTo(416,327.167,408.833,320,400,320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "clear-day": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(256,144);
    ctx.bezierCurveTo(194.25,144,144,194.25,144,256);
    ctx.bezierCurveTo(144,317.749,194.25,368,256,368);
    ctx.bezierCurveTo(317.75,368,368,317.749,368,256);
    ctx.bezierCurveTo(368,194.25,317.75,144,256,144);
    ctx.closePath();
    ctx.moveTo(256,112);
    ctx.bezierCurveTo(264.833,112,272,104.854,272,96);
    ctx.lineTo(272,64);
    ctx.bezierCurveTo(272,55.167,264.833,48,256,48);
    ctx.bezierCurveTo(247.14600000000002,48,240,55.167,240,64);
    ctx.lineTo(240,96);
    ctx.bezierCurveTo(240,104.854,247.146,112,256,112);
    ctx.closePath();
    ctx.moveTo(256,400);
    ctx.bezierCurveTo(247.14600000000002,400,240,407.167,240,416);
    ctx.lineTo(240,448);
    ctx.bezierCurveTo(240,456.854,247.146,464,256,464);
    ctx.bezierCurveTo(264.833,464,272,456.854,272,448);
    ctx.lineTo(272,416);
    ctx.bezierCurveTo(272,407.167,264.833,400,256,400);
    ctx.closePath();
    ctx.moveTo(380.417,154.167);
    ctx.lineTo(403.042,131.542);
    ctx.bezierCurveTo(409.292,125.292,409.292,115.167,403.042,108.917);
    ctx.bezierCurveTo(396.791,102.667,386.667,102.667,380.417,108.917);
    ctx.lineTo(357.792,131.542);
    ctx.bezierCurveTo(351.541,137.792,351.541,147.917,357.792,154.167);
    ctx.bezierCurveTo(364.042,160.416,374.166,160.416,380.417,154.167);
    ctx.closePath();
    ctx.moveTo(131.541,357.854);
    ctx.lineTo(108.91799999999999,380.479);
    ctx.bezierCurveTo(102.666,386.729,102.666,396.85499999999996,108.91799999999999,403.104);
    ctx.bezierCurveTo(115.16699999999999,409.354,125.291,409.354,131.541,403.104);
    ctx.lineTo(154.166,380.479);
    ctx.bezierCurveTo(160.417,374.188,160.417,364.104,154.166,357.854);
    ctx.bezierCurveTo(147.917,351.604,137.792,351.562,131.541,357.854);
    ctx.closePath();
    ctx.moveTo(112,256);
    ctx.bezierCurveTo(112,247.167,104.833,240,96,240);
    ctx.lineTo(64,240);
    ctx.bezierCurveTo(55.146,240,48,247.167,48,256);
    ctx.bezierCurveTo(48,264.854,55.146,272,64,272);
    ctx.lineTo(96,272);
    ctx.bezierCurveTo(104.833,272,112,264.854,112,256);
    ctx.closePath();
    ctx.moveTo(448,240);
    ctx.lineTo(416,240);
    ctx.bezierCurveTo(407.146,240,400,247.167,400,256);
    ctx.bezierCurveTo(400,264.854,407.146,272,416,272);
    ctx.lineTo(448,272);
    ctx.bezierCurveTo(456.833,272,464,264.854,464,256);
    ctx.bezierCurveTo(464,247.167,456.833,240,448,240);
    ctx.closePath();
    ctx.moveTo(131.521,154.167);
    ctx.bezierCurveTo(137.76999999999998,160.417,147.896,160.417,154.146,154.167);
    ctx.bezierCurveTo(160.39499999999998,147.917,160.39499999999998,137.792,154.146,131.542);
    ctx.lineTo(131.521,108.917);
    ctx.bezierCurveTo(125.27099999999999,102.667,115.14499999999998,102.667,108.89599999999999,108.917);
    ctx.bezierCurveTo(102.64599999999999,115.167,102.64599999999999,125.292,108.89599999999999,131.542);
    ctx.lineTo(131.521,154.167);
    ctx.closePath();
    ctx.moveTo(380.459,357.812);
    ctx.bezierCurveTo(374.166,351.562,364.083,351.562,357.834,357.812);
    ctx.bezierCurveTo(351.584,364.06100000000004,351.541,374.187,357.834,380.437);
    ctx.lineTo(380.459,403.062);
    ctx.bezierCurveTo(386.708,409.31100000000004,396.833,409.31100000000004,403.084,403.062);
    ctx.bezierCurveTo(409.333,396.812,409.333,386.68600000000004,403.084,380.437);
    ctx.lineTo(380.459,357.812);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "clear-night": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(248.082,263.932);
    ctx.bezierCurveTo(216.56199999999998,232.39000000000001,208.103,186.827,222.06199999999998,147.39000000000001);
    ctx.bezierCurveTo(206.81199999999998,152.78500000000003,192.39399999999998,161.223,180.20799999999997,173.41000000000003);
    ctx.bezierCurveTo(136.45699999999997,217.16000000000003,136.45699999999997,288.077,180.20799999999997,331.80500000000006);
    ctx.bezierCurveTo(223.93699999999995,375.5350000000001,294.83299999999997,375.5570000000001,338.582,331.80500000000006);
    ctx.bezierCurveTo(350.811,319.6190000000001,359.228,305.2010000000001,364.603,289.9510000000001);
    ctx.bezierCurveTo(325.188,303.91,279.604,295.451,248.082,263.932);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  },

  "partly-cloudy-day": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(208,64);
    ctx.bezierCurveTo(216.833,64,224,56.833,224,48);
    ctx.lineTo(224,16);
    ctx.bezierCurveTo(224,7.167,216.833,0,208,0);
    ctx.bezierCurveTo(199.167,0,192,7.167,192,16);
    ctx.lineTo(192,48);
    ctx.bezierCurveTo(192,56.833,199.167,64,208,64);
    ctx.closePath();
    ctx.moveTo(332.438,106.167);
    ctx.lineTo(355.063,83.542);
    ctx.bezierCurveTo(361.312,77.292,361.312,67.167,355.063,60.917);
    ctx.bezierCurveTo(348.813,54.667,338.688,54.667,332.438,60.917);
    ctx.lineTo(309.813,83.542);
    ctx.bezierCurveTo(303.563,89.792,303.563,99.917,309.813,106.167);
    ctx.bezierCurveTo(316.062,112.417,326.188,112.417,332.438,106.167);
    ctx.closePath();
    ctx.moveTo(16,224);
    ctx.lineTo(48,224);
    ctx.bezierCurveTo(56.833,224,64,216.833,64,208);
    ctx.bezierCurveTo(64,199.167,56.833,192,48,192);
    ctx.lineTo(16,192);
    ctx.bezierCurveTo(7.167,192,0,199.167,0,208);
    ctx.bezierCurveTo(0,216.833,7.167,224,16,224);
    ctx.closePath();
    ctx.moveTo(352,208);
    ctx.bezierCurveTo(352,216.833,359.167,224,368,224);
    ctx.lineTo(400,224);
    ctx.bezierCurveTo(408.833,224,416,216.833,416,208);
    ctx.bezierCurveTo(416,199.167,408.833,192,400,192);
    ctx.lineTo(368,192);
    ctx.bezierCurveTo(359.167,192,352,199.167,352,208);
    ctx.closePath();
    ctx.moveTo(83.541,106.167);
    ctx.bezierCurveTo(89.792,112.417,99.917,112.417,106.166,106.167);
    ctx.bezierCurveTo(112.417,99.917,112.417,89.792,106.166,83.542);
    ctx.lineTo(83.541,60.917);
    ctx.bezierCurveTo(77.291,54.667,67.167,54.667,60.916,60.917);
    ctx.bezierCurveTo(54.666,67.167,54.666,77.292,60.916,83.542);
    ctx.lineTo(83.541,106.167);
    ctx.closePath();
    ctx.moveTo(400,256);
    ctx.bezierCurveTo(394.688,256,389.438,256.375,384.208,257.125);
    ctx.bezierCurveTo(367.437,234.25,345.084,216.792,319.75,205.625);
    ctx.bezierCurveTo(318.459,145,268.938,96,208,96);
    ctx.bezierCurveTo(146.25,96,96,146.25,96,208);
    ctx.bezierCurveTo(96,225.438,100.334,241.75,107.5,256.438);
    ctx.bezierCurveTo(47.875,258.875,0,307.812,0,368);
    ctx.bezierCurveTo(0,429.75,50.25,480,112,480);
    ctx.bezierCurveTo(125.688,480,139.084,477.5,151.709,472.667);
    ctx.bezierCurveTo(180.666,497.917,217.5,512,256,512);
    ctx.bezierCurveTo(294.54200000000003,512,331.33299999999997,497.917,360.291,472.66700000000003);
    ctx.bezierCurveTo(372.916,477.5,386.312,480,400,480);
    ctx.bezierCurveTo(461.75,480,512,429.75,512,368);
    ctx.bezierCurveTo(512,306.25,461.75,256,400,256);
    ctx.closePath();
    ctx.moveTo(256,192);
    ctx.bezierCurveTo(210.062,192,167.5,211.812,137.625,245.25);
    ctx.bezierCurveTo(131.688,234.083,128,221.542,128,208);
    ctx.bezierCurveTo(128,163.812,163.812,128,208,128);
    ctx.bezierCurveTo(247.812,128,280.562,157.167,286.70799999999997,195.25);
    ctx.bezierCurveTo(276.688,193.25,266.459,192,256,192);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  },

  "partly-cloudy-night": function(ctx) {
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(512,0);
    ctx.lineTo(512,512);
    ctx.lineTo(0,512);
    ctx.closePath();
    ctx.clip();

    ctx.scale(0.25, 0.25);
    ctx.translate(200,240);

    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(435.062,262.166);
    ctx.bezierCurveTo(439.937,258.541,444.874,254.97899999999998,449.291,250.562);
    ctx.bezierCurveTo(462.499,237.33300000000003,472.562,221.229,479.08299999999997,202.70800000000003);
    ctx.bezierCurveTo(481.166,196.91600000000003,479.68699999999995,190.41600000000003,475.311,186.08300000000003);
    ctx.bezierCurveTo(470.957,181.70800000000003,464.49899999999997,180.229,458.688,182.29100000000003);
    ctx.bezierCurveTo(423.292,194.79100000000003,385,186.29100000000003,358.792,160.04100000000003);
    ctx.bezierCurveTo(332.54299999999995,133.79100000000003,324.001,95.52000000000002,336.54299999999995,60.145000000000024);
    ctx.bezierCurveTo(338.5849999999999,54.33300000000003,337.126,47.874000000000024,332.751,43.499000000000024);
    ctx.bezierCurveTo(328.41799999999995,39.166000000000025,321.93899999999996,37.666000000000025,316.126,39.70800000000003);
    ctx.bezierCurveTo(297.58399999999995,46.291000000000025,281.501,56.33300000000003,268.292,69.54100000000003);
    ctx.bezierCurveTo(234.75099999999998,103.04100000000003,224.313,150.54100000000003,235.813,193.33300000000003);
    ctx.bezierCurveTo(192.563,198.854,153.688,221.83300000000003,127.79199999999999,257.125);
    ctx.bezierCurveTo(122.56299999999999,256.375,117.31299999999999,256,111.99999999999999,256);
    ctx.bezierCurveTo(50.249999999999986,256,-1.4210854715202004e-14,306.249,-1.4210854715202004e-14,368);
    ctx.bezierCurveTo(-1.4210854715202004e-14,429.75,50.249999999999986,480,111.99999999999999,480);
    ctx.bezierCurveTo(125.68799999999999,480,139.08399999999997,477.499,151.709,472.666);
    ctx.bezierCurveTo(180.665,497.916,217.499,512,255.999,512);
    ctx.bezierCurveTo(294.541,512,331.332,497.916,360.28999999999996,472.666);
    ctx.bezierCurveTo(372.91499999999996,477.499,386.311,480,399.99899999999997,480);
    ctx.bezierCurveTo(461.74899999999997,480,511.99899999999997,429.75,511.99899999999997,368);
    ctx.bezierCurveTo(512,318.562,479.583,276.979,435.062,262.166);
    ctx.closePath();
    ctx.moveTo(290.916,92.167);
    ctx.bezierCurveTo(293.45799999999997,89.584,296.187,87.188,299.062,84.938);
    ctx.bezierCurveTo(296.812,120.917,309.791,156.313,336.166,182.667);
    ctx.bezierCurveTo(362.542,209.042,397.937,222,433.91700000000003,219.77100000000002);
    ctx.bezierCurveTo(420.12500000000006,237.35500000000002,401.125,248.29200000000003,380.79100000000005,252.959);
    ctx.bezierCurveTo(353.41600000000005,218.209,313.18700000000007,196.335,268.8330000000001,192.772);
    ctx.bezierCurveTo(256.562,158.813,263.75,119.333,290.916,92.167);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  },

  "umbrella": function(ctx) {
    ctx.save();
    ctx.translate(80,20);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(32,0);
    ctx.lineTo(32,32);
    ctx.lineTo(0,32);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(16,0);
    ctx.bezierCurveTo(7.18,0,0,7.178,0,16);
    ctx.lineTo(4,16);
    ctx.bezierCurveTo(4,15.174,4.676,14.5,5.5,14.5);
    ctx.bezierCurveTo(6.328,14.5,7,15.174,7,16);
    ctx.lineTo(11,16);
    ctx.bezierCurveTo(11,15.174,11.676,14.5,12.5,14.5);
    ctx.bezierCurveTo(13.328,14.5,14,15.174,14,16);
    ctx.lineTo(14,26);
    ctx.bezierCurveTo(14,27.102,13.105,28,12,28);
    ctx.bezierCurveTo(10.898,28,10,27.102,10,26);
    ctx.lineTo(6,26);
    ctx.bezierCurveTo(6,29.309,8.695,32,12,32);
    ctx.bezierCurveTo(15.312,32,18,29.309,18,26);
    ctx.lineTo(18,16);
    ctx.bezierCurveTo(18,15.174,18.676,14.5,19.5,14.5);
    ctx.bezierCurveTo(20.328,14.5,21,15.174,21,16);
    ctx.lineTo(25,16);
    ctx.bezierCurveTo(25,15.174,25.676,14.5,26.5,14.5);
    ctx.bezierCurveTo(27.328,14.5,28,15.174,28,16);
    ctx.lineTo(32,16);
    ctx.bezierCurveTo(32,7.178,24.824,0,16,0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }
};

icons["hail"] = icons["snow"];
