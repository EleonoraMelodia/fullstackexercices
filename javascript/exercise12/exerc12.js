/*# Array Methods Advanced

Create a function called `nicknameMap` that takes in an array of people and returns an array of nicknames. The nickname should be composed in this way: `<name>-<age>`.

Example:

```
{ name: 'Paul', age: 21 } => Paul-21
```
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
]


function nicknameMap (arr) {
    return people.map((el) => el.name + "-" + el.age)
}
console.log(nicknameMap(people));