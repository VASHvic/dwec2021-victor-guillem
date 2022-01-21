// const response = fetch("https://api.github.com/orgs/iesme-daw2021/repos")
//   .then((e) => {
//     if (e.ok) {
//       console.log(e);
//       return e.json();
//     }
//   })
//   .then((data) => console.log(data[1].id));

const test = async () => {
  let response = await fetch("https://api.github.com/orgs/iesme-daw2021/repos");
  //   for ([key, value] of response.headers) {
  //     console.log(`key: ${key}, VAlue: ${value}`);
  //   }
  console.log(response.headers.get("content-type")); //headers son maps
};

test();
