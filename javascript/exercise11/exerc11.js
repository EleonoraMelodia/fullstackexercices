
//Create a function called `adultFilter` that takes in an array of people and returns the ones who are of age.

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
]


function adultFilter (arr) {
return people.filter((el)=> el.age > 18)
};
console.log(adultFilter(people));
