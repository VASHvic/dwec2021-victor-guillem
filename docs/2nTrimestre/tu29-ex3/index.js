// Rewrite the previous exercise allowing to configure the number of ms between
//  each change of the span text and the number of loops. For example,
//  1000ms (1 second), 10 loops; this would mean to show a 0 initially
//  and then 1,2,3 and so on until 10, every second. But make it in a way that
//   just changing the 2 params to 2000ms and 3 will show 1,2,3 every 2 seconds.

window.addEventListener("unhandledrejection", function (event) {
  event.preventDefault();
  console.error("Unexpected Error");
});

const time = document.createElement("span");
document.body.appendChild(time);

function changemsg(txt) {
  msg.innerText = txt;
}

async function delay(ms, callback) {
  return new Promise((resolve) => setInterval(() => resolve(callback), ms));
}

var seconds = 0;

function incrementSeconds(times) {
  time.innerText = seconds + " seconds.";
  seconds += 1;
}
