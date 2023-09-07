const number = 1;

function myPromise () {
return new Promise ((resolve, reject) => { 
  if(number > 10) {
    resolve ("The number you wrote is admitted!")
  }
  else {
    reject ("sorry, number not admitted!")
  }
} )};

myPromise()
.then(result => console.log(result))
.catch((err) => console.error(err));