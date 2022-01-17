window.addEventListener("unhandledrejection", function (event) {
  event.preventDefault();
  console.error("Unexpected Error");
});

const msg = document.createElement("span");

document.body.appendChild(msg);

const time = document.createElement("span");
document.body.appendChild(time);

function changemsg(txt) {
  msg.innerText = txt;
}

function delay(ms, callback) {
  msg.innerText = "Loading ";
  return new Promise((resolve) => setTimeout(() => resolve("Complete "), ms));
}

function incrementSeconds(times, seconds = 0) {
  time.innerText = seconds + " seconds.";
  seconds += 1;
  if (seconds < times) return setTimeout(() => incrementSeconds(times, seconds), 1000);
}

delay(5000, incrementSeconds(5))
  .then(changemsg)
  .finally(() => {
    time.remove();
  });
