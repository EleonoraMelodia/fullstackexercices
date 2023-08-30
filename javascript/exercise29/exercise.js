class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


}

const developer = new Person(1, "Mario", "Rossi", 25);

let jsonPerson = {
  "id": 1,
  "firstName": "Mario",
  "lastName": "Rossi",
  "age": 25,
};

console.log(jsonPerson);
// Print developer as json object
