console.log('script loaded');
// run functions on ready
$(document).ready(function() {
  getStops();
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
