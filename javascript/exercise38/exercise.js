// // Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
// // If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
//

// We write a second `promise` that takes a variable of type number as a parameter. If the input parameter
// is greater than 0.5, in the resolve we must return the following data:
// `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
// Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

// Tips:

// - If in doubt, watch the lesson
// - To understand how they work, you can try adding `setTimeout` to the promise functions

const isLogged = true;

let firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject(new Error("Sorry, the login wasn't successfully!"));
  }
});

let secondPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num >= 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("sorry, this is not a number!");
    }
  });
};

firstPromise
.then(secondPromise)
.then((result)=> console.log(result))
.catch((err) => console.error(err));
