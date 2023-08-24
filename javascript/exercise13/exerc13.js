/*# Array Methods Advanced

Create a function called `ageAverage` that takes in an array of people and returns the average age.

**Suggestion**

Look at the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) methods to solve the exercise.

*/


const people = [

    {name: "Eleonora",
    surname: "Melodia",
    age: 31,
      },
    {name: "Riccardo",
    surname: "Giacalone",
    age: 35,
      },
    {name: "Zelda",
    surname: "Melodia",
    age: 3,
      },
    {name: "Malu",
    surname: "Melodia",
    age: 10,
      }
];
function ageAverage (arr) {
let mappedAges = people.map((el) => el.age);
let sum = mappedAges.reduce((a, b) => a + b);
return sum / people.length;
}

console.log(ageAverage(people));




