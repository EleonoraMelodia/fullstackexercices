const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const arr = Object.keys(person);
arr.forEach(el => console.log (el + " : " + person[el]))



// Print values of person using Object.keys
