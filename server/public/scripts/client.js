console.log('script loaded');
// run functions on ready
$(document).ready(function() {
  getStops();
  getDepartures();
  getStopsFromAPI(5, 4);
});

function getStops() {
  $.ajax({
    type: "GET",
    url: "/stops",
    success: function(response) {
      console.log("result:", response);
    }
  });
}

function getDepartures() {
  $.ajax({
    type: "GET",
    url: "http://svc.metrotransit.org/NexTrip/" + "5/4/7SOL" + "?format=json",
    success: function(response) {
      console.log("result:", response);
    }
  });
}

function getStopsFromAPI(route, direction) {
  $.ajax({
    type: "GET",
    url: "  http://svc.metrotransit.org/NexTrip/Stops/" + route + "/" + direction + "?format=json",
    success: function(response) {
      console.log("result:", response);
    }
  });
}
