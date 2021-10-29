let ex13 = `{
    "year": 2021,
    "city": "Gandia",
    "school": "IES Maria Enriquez",
    "active": true,
    "numberOfStudents": 12,
    "teacher": {
      "name": "Xavi",
      "age": 46,
      "car": {
        "brand": "Seat",
        "model": "Leon",
        "year": 2015
      },
      "students": [
        {
          "name": "pepe",
          "age": 15,
          "male": true,
          "hobbies": ["playstation", "painting", "reading"]
        },
        {
          "name": "juan",
          "age": 16,
          "male": true,
          "hobbies": ["cooking", "reading", "sleeping"]
        }
      ]
    }
  }`;

let transformJson = (string) => {
  let parsedString = JSON.parse(string);
  delete parsedString.teacher.age;
  parsedString.teacher.students.push({ name: "Ana" });
  parsedString;
  return parsedString;
};

console.log(transformJson(ex13));
console.log(transformJson(ex13).teacher.students);
