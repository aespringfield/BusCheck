// Get Route and Direction from user

// Get Alexa address info

// Send Alexa address info to Google Maps geocoding to return location (lat & lng)

// Check if Route is a real route

// Check if route goes in the direction specified

// Find closest stop for that route in that direction.
// Need trip_id from trips.txt, stop_id from stop_times.txt using trip_id, then lat/lngs from stops.txt
// Way easier to use Google Place library for the above?
// Use Geolib to calculate distance between stop and location for first & last stop
// Run function that takes in first stop object (index & distance), last stop object (index & distance), and array of stops
// Set starting closestSoFar as middle stop in list
// 
// Use Geolib to calculate distance between stop and location
//

// Send lat & lng to Google Place to return nearby transit stations. Sort by distance.

// Find nearest transit station that serves Route and Direction
// Note: need to make sure results from Place API let you do this

// Directions are identified with an ID value. 1 = South, 2 = East, 3 = West, 4 = North.

// GetStops operation - http://svc.metrotransit.org/NexTrip/Stops/{ROUTE}/{DIRECTION}
// Returns a list of Timepoint stops for the given Route/Direction. The result includes text/value pairs with the stop description and a 4 character stop (or node) identifier.
// Example Timepoint stop: Portland Ave and 77th St 77PO

// NexTrip GetTimepointDepartures
// Format: http://svc.metrotransit.org/NexTrip/{ROUTE}/{DIRECTION}/{STOP}
// Example: http://svc.metrotransit.org/NexTrip/5/4/7SOL



"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"

exports.placesNearby = {
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
  validator: v.object({
    location: utils.latLng,
    language: v.optional(v.string),
    radius: v.optional(v.number),
    keyword: v.optional(v.string),
    minprice: v.optional(v.number),
    maxprice: v.optional(v.number),
    name: v.optional(v.string),
    opennow: v.optional(v.boolean),
    rankby: v.optional(v.oneOf(['prominence', 'distance'])),
    type: v.optional(v.string),
    pagetoken: v.optional(v.string),
    retryOptions: v.optional(utils.retryOptions),
    timeout: v.optional(v.number)
  })
};

// rankby will be distance
function createPlaceRequestUrl(baseUrl, lat, lng, radius, type, key, rankby) {

}

?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
