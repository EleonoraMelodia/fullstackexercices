/*# Object Methods

Create an object `person`. Print its key/value pair in the console. Try to use the method `Object.kyes`:

```
firstName: Mario
lastName: Rossi
age: 25
```*/

const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25
};

const arr = Object.keys(person);
arr.forEach(el => console.log( el + ": " + person[el]));


