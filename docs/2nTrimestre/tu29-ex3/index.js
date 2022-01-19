window.addEventListener("unhandledrejection", function (event) {
  event.preventDefault();
  console.error("Unexpected Error");
});

const time = document.createElement("span");
document.body.appendChild(time);

function delay(ms) {
  return new Promise((resolve) => setInterval(() => resolve(), ms));
}

async function changeTime(ms, secs) {
  for (let i = 0; i <= secs; i++) {
    time.innerText = i;
    await delay(ms);
  }
}

changeTime(500, 9);
