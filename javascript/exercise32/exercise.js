const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  
    toJson () {
      return {id : this.id, age : this.age};

    }
  
};

const toJsonVal = person.toJson();
const json = (JSON.stringify(toJsonVal)) ;
console.log(json); // Should return: { id: 1, age: 25 }