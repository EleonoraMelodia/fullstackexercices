
//Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.

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
      reject(new Error("sorry, this is not a number!"));
    }
  });
};

firstPromise
.then(secondPromise)
.then((result)=> console.log(result))
.catch((err) => console.error(err))
.finally(() => console.log("always printed, for better or for worse"))