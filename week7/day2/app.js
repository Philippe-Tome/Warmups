// Proximity
// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.

// You are given the following set of data as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly).

var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]
// Write a function in JS to print the names of the results in order of closest to your location to furthest away.

// Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

function resultsLoop(arr){
    for (var i = 0; i < arr.length; i++) {
        arr[i].dist = getDistanceFromLatLonInKm(startPoint.location.lat, startPoint.location.long, arr[i].location.lat, arr[i].location.long);
    }
}

resultsLoop(results);

results.sort(function(a, b){
    return a.dist - b.dist
})

for (var i = 0; i < results.length; i++) {
  console.log(`${results[i].name} is ${results[i].dist}km away from General Assembly`)
}


