
/**
*@function bearingCalculation
*@desc calculates the angle two coordinates have between them; source: www.movable-type.co.uk/scripts/latlong.html
*@param start array [lon,lat]
*@param end array [lon,lat]
*@returns bearing value in degrees
*/
function bearingCalculation (start, end){
  //transforming into rad
  var lat= toRad(end[1]-start[1]);
  var lon= toRad(end[0]-start[0]);
  //bearing Calculation
  var y= Math.sin(lon)*Math.cos(toRad(end[1]));
  var x = Math.cos(toRad(start[1]))*Math.sin(toRad(end[1]))-
          Math.sin(toRad(start[1]))*Math.cos(toRad(end[1]))*Math.cos(lon);
  var brng=toDegrees(Math.atan2(y,x));

  //transforming bearing to 0 till 360° instead of from -180 bis 180°
  if (brng<0){
        brng+=360;}

  var roundedBrng =brng.toFixed(2);
  return roundedBrng;
}

/**
*@function distanceCalculation
*@desc takes two coordinates and calculates the shortest distance between them; source: www.movable-type.co.uk/scripts/latlong.html
*@param start array [lon,lat]
*@param end array [lon,lat]
*@returns the distance in Km
*/
function distanceCalculation(start, end){
  //transforming into rad
  var lat= toRad(end[1]-start[1]);
  var lon= toRad(end[0]-start[0]);
  //distance Calculation in rad
  var distance= Math.sin(lat/2)*Math.sin(lat/2)+Math.cos(toRad(start[1]))*Math.cos(toRad(end[1]))*Math.sin(lon/2)*Math.sin(lon/2);
  var dist= 2*Math.atan2(Math.sqrt(distance),Math.sqrt (1-distance));
  var distKM= Math.abs(6371*dist);
  var roundedDist= distKM.toFixed(3);
  return roundedDist;
}

/**
*@function toRad
*@desc helping function converts degree into radians
*@returns the value in rad
*/
function toRad(value){
        return value * Math.PI / 180;
    }

/**
*@function toDegrees
*@desc helping function converts radian into degrees
*@returns the value in degrees
*/
function toDegrees(value){
  return value*(180/Math.PI);
}


var assert = require('assert');
//var script = require('../public/script');
//var turf= require('https://unpkg.com/@turf/turf/turf.min.js');
var bearing = require ('@turf/bearing');
var distance = require ('@turf/distance');

/*
bearing(start, end);
distance(from, to);*/

describe('distance and bearing tester', function () {

        var point1=[7.622795, 51.959817];
        var point2=[7.633953, 51.966587];
        var point3=[7.596016, 51.969336];
        var point4=[7.587433, 51.948180];
        var point5=[7.647224, 51.954504];

        it('bearing equals turf.js bearing', function () {
      var bearing1 = bearing.default(point1, point2);
      assert.equal(bearingCalculation(point1,point2),bearing1);
});

    it('bearing equals turf.js bearing', function () {
      var bearing2 = bearing.default(point1, point3);
      assert.equal(bearingCalculation(point1,point3),bearing2);
});

    it('bearing equals turf.js bearing', function () {
      var bearing3 = bearing.default(point1, point4);
      assert.equal(bearingCalculation(point1,point4),bearing3);
});

    it('bearing equals turf.js bearing', function () {
      var bearing4 = bearing.default(point1, point5);
      assert.equal(bearingCalculation(point1,point5),bearing4);
  });

  it('distance equals turf.js bearing', function (){
    var distance1 = distance.default(point1, point2);
    assert.equal(distanceCalculation(point1,point2),distance1);
});

  it('distance equals turf.js bearing', function (){
    var distance2 = distance.default(point1, point3);
    assert.equal(distanceCalculation(point1,point3),distance2);
});

  it('distance equals turf.js bearing', function (){
    var distance3 = distance.default(point1, point4);
    assert.equal(distanceCalculation(point1,point4),distance3);
});

  it('distance equals turf.js bearing', function (){
    var distance4 = distance.default(point1, point5);
    assert.equal(distanceCalculation(point1,point5),distance4);
  });
});


//var bearing = turf.bearing(point1, point2);
