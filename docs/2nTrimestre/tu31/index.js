// Create web page that obtains your coordinates and shows your position in a map.
//  The position should be updated constantly.
// The webpage will contain a button to activate the notifications.
// Clicking the button will request permission to notify the user.
// When the visibility of the webpage changes to not visible,
//  notify the user to click to stop the geolocation. If the user clicks the notification,
//  en the web page should stop geopositioning the user in the map and
//  display a message below the map informing that the active geolocation has stopped.

const btn = document.querySelector("button");
btn.addEventListener("click", checkPermision);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const notificaiton = new Notification("Do you want to stop tacking your location?", {
      body: "CLick in the notification to stop, cancel otherwise",
    });
  }
});
function checkPermision() {
  Notification.requestPermission((result) => {
    if (result === "denied") {
      console.log("Permission wasn't granted. Allow a retry.");
      return;
    }
    if (result === "granted" && navigator.geolocation) {
      console.log("Permission  granted.");
      navigator.geolocation.getCurrentPosition((position) => {
        return initMap(position.coords.latitude, position.coords.longitude);
      });
    }
    if (result === "default") {
      console.log("The permission request was dismissed.");
      return;
    }
  });
}
/**
 * Creates the map
 * @param {*} latitude
 * @param {*} longitude
 * @returns returns the map
 */
function initMap(latitude, longitude) {
  const map = L.map("map").setView([latitude, longitude], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 12,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoieGF2aTEycC1wcm9mZSIsImEiOiJja3kxbnhrZjAwZDdkMnhybTVheWpzOXVrIn0.6tgSdQGqA4w9VQ0kY4xrlA",
    }
  ).addTo(map);

  return map;
}

/**
 * Position the coords in the map with a marker
 * @param {*} map
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} marker
 * @returns
 */
function changePosition(map, latitude, longitude, marker) {
  map.setView([latitude, longitude], 13);
  if (marker) {
    marker.removeFrom(map);
  }
  const newMarker = L.marker([latitude, longitude]).addTo(map);
  return newMarker;
}

/**
 * Creates the map
 * @param {*} latitude
 * @param {*} longitude
 * @returns returns the map
 */
function initMap(latitude, longitude) {
  const map = L.map("map").setView([latitude, longitude], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 12,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoieGF2aTEycC1wcm9mZSIsImEiOiJja3kxbnhrZjAwZDdkMnhybTVheWpzOXVrIn0.6tgSdQGqA4w9VQ0kY4xrlA",
    }
  ).addTo(map);

  return map;
}
