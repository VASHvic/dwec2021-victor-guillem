async function init() {
  console.log(1);
  await sleep(1000);
  console.log(2);
}

// one liner
let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
