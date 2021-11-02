import { transformJson, showJSON } from "../../../docs/tu13/transformJson";

describe("Test suite for Tu13 - JSON", () => {
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
  it("recieves a string containing a JSON and returns an object", () => {
    expect(transformJson(ex13)).toHaveProperty("city");
    expect(transformJson(ex13)).toHaveProperty("year");
    expect(transformJson(ex13)).toHaveProperty("teacher");
  });
  it("deletes the property age from teacher", () => {
    expect(transformJson(ex13).teacher).not.toHaveProperty("age", 46);
    expect(transformJson(ex13).teacher).not.toHaveProperty("age");
  });
  it("adds a province called Valencia", () => {
    expect(transformJson(ex13)).toHaveProperty("province", "Valencia");
  });
  it("adds a new Student called Ana", () => {
    expect(transformJson(ex13).teacher.students[2].name).toBe("Ana");
    expect(
      transformJson(ex13).teacher.students.find(
        (student) => student.name === "Ana"
      )
    ).toEqual({ name: "Ana" });
  });
});
