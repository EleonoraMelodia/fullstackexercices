let isLogged = true;
let promiseOne = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  }
  reject(new Error("an error about the login occurred!"));
});

let promiseTwo = (number) =>
  new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    }
    reject(new Error("sorry, the number is not great enough"));
  });

promiseOne
  .then(promiseTwo)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log(`I'm always printed out`));
