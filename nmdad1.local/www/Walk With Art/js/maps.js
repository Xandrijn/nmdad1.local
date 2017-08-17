var route;
var start;
var end;
var travelMode = "WALKING";
var json;
var map;
var waypts = [];


/*
* initializing the google map
*/
function initMap() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();

    map = new google.maps.Map(document.getElementById('map'), {});
    
    directionsDisplay.setMap(map);
};

/*
* requests the route on the google map and calls function distanceMatrix
*/
function calcRoute() {

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode[travelMode],
    waypoints: waypts
  };

  directionsService.route(request, function(result, status) {

    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
};

/*
* handles page load/reload (get items out of local storage, calculates route, shows chart and saved charts)
*/
document.addEventListener("DOMContentLoaded", function(event) { 
  var directionsDisplay;
  var directionsService;

  if (localStorage.getItem('route') !== null && localStorage.getItem('route') !== '') {
      route = localStorage.getItem('route');
      localStorage.setItem('route', '');
  } else {
      window.location = "routes.html";
  }

  if (route === 'walk1') {
    start = "Nieuwevaart 124, Gent";
    end = "Zuidstationstraat 25, Gent";
    getDataRoute1();
  } else if (route === 'walk2') {
    start = "Lucas Munichstraat 76, Gent";
    end = "Kasteel Claeys-Bouüaert, Kasteeldreef 2, Gent";
    getDataRoute2();
  } else if (route === 'walk3') {
    start = "Louis Pasteurlaan 2, Gent";
    end = "Dendermondsesteenweg 80, Gent";
    getDataRoute3();
  }
  
});

function getDataRoute1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
      
      var i = 1;
        while (i < 9) {
          waypts.push({
              location: new google.maps.LatLng(json[i].latitude,json[i].longitude),
              stopover: true
          });
          i++;
        };
        calcRoute();
      };
    };
  xhttp.open("GET", 'https://datatank.stad.gent/4/cultuursportvrijetijd/kunstenplan.json', true);
  xhttp.send();
};

function getDataRoute2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
      
      var i = 17;

        while (i < 20) {
          waypts.push({
             location: new google.maps.LatLng(json[i].latitude,json[i].longitude),
              stopover: true
          });
          i++;
        };
        calcRoute();
      };
    };
  xhttp.open("GET", 'https://datatank.stad.gent/4/cultuursportvrijetijd/kunstenplan.json', true);
  xhttp.send();
};

function getDataRoute3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
      
      var i = 29;

        while (i < 36) {
          waypts.push({
             location: new google.maps.LatLng(json[i].latitude,json[i].longitude),
              stopover: true
          });
          i++;
        };
        calcRoute();
      };
    };
  xhttp.open("GET", 'https://datatank.stad.gent/4/cultuursportvrijetijd/kunstenplan.json', true);
  xhttp.send();
};


