const btn = document.querySelector("button");
btn.addEventListener("click", checkPermision);

let map;
let marker = navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  map = initMap(latitude, longitude);
});
const watchID = navigator.geolocation.watchPosition((position) => {
  console.log("actualizando");
  changePosition(map, position.coords.latitude, position.coords.longitude, marker);
});

function checkPermision() {
  Notification.requestPermission((result) => {
    if (result === "denied") {
      alert("Permission wasn't granted. Allow a retry.");
      return;
    }
    if (result === "granted") {
      alert(`Permission  ${result}.`);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          console.log("visibility change");
          const notification = new Notification(
            "Do you want to stop tracking your location?",
            {
              body: "Click in the notification to stop, cancel otherwise",
            }
          );
          notification.addEventListener("click", () => {
            navigator.geolocation.clearWatch(watchID);
            notification.close();
          });
        }
      });
      return;
    }
    if (result === "default") {
      alert("The permission request was dismissed.");
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
