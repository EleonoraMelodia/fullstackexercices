const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";
console.log(person1);
console.log(person2);

// that's because the objects, as the functions, follow the pass by reference property. In that property, the change of a value, that equals another one, 
//affects the original one, beacause despite the primitive values, the object doesn't make a copy, but acts directly on the originals.