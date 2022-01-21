const a = document.getElementById("a");
const b = document.getElementById("notif");
b.addEventListener("click", checkPermision);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    a.href = `http://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
  });
}

function checkPermision() {
  if (window.Notification) {
    Notification.requestPermission().then((permision) => {
      handlePermision(permision);
    });
  }
}
function handlePermision(permision) {
  console.log(permision);
}
