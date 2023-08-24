/*Create the getters and setters methods for each property
 and a getter method called `fullName` that returns the full name.*/

class Person {
  constructor(firstName, lastName, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  
  get firstName() {
    return this._firstName;
  };
  set firstName (newFirstName) {
    return this._firstName = newFirstName;
  };
  get lastName () {
    return this._lastName;
  }
set lastName (newLastName) {
  return this._lastName = newLastName;
}

get age () {
  return this._age;
}

set age (newAge) {
return this._age = newAge;
}

get fullName () {
  return this._firstName + " " + this._lastName;
}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);