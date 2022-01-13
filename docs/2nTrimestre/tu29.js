// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error("Script failed"));

//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
//   function (error, script) {
//     if (error) {
//       alert(`Error: ${error.message}`);
//     } else {
//       alert(`${script.src} is loaded`);
//     }
//   }
// );

function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then((scr) => {
    alert(src);
  })
  .catch((error) => console.log(error));
