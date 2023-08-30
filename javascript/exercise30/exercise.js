//Create the `fromJson` method that takes in a json as parameter and returns an object of type `Person`.


class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);//trasformo la classe in un oggetto JSON
  }
 static fromJson () {
 const newObj = JSON.parse(json); //rendo la stringa json un oggetto in modo da poterla riutiizzare sotto, estrapolando dal JSON object id, firstName...
 return new Person(newObj.id, newObj.firstName, newObj.lastName, newObj.age);
 }
  }
 
const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25 }';

const developer = Person.fromJson(json);
console.log(developer);


