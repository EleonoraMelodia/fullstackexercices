let number = 1;
let myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`number ${number} is greather than 10!`);
  }
  reject(`'${number}' isn't greater than 10, or meaby not a number`);
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
