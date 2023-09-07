// Starting from the previous exercise, we want to add to our function `repeatHello`, a `clearInterval` after 5 seconds, could you do that?

// Tips:

// - The `setInterval` and `setTimeout` methods will be useful

function printAsyncName(callback, name) {
    const helloInterval = setInterval(() => {
      callback();
    }, 1000);
  
    const nameInterval = setInterval(() => {
      console.log(name);
    }, 2000);
  
    setTimeout(() => {
      clearInterval(helloInterval);
      clearInterval(nameInterval);
    }, 5000);
  }
  
  function sayHello() {
    console.log("Hello");
  }
  
  function repeatHello(callback, name, interval) {
    const repeatInterval = setInterval(() => {
      printAsyncName(callback, name);
    }, interval);
  
    setTimeout(() => {
      clearInterval(repeatInterval);
    }, 5000);
  }
  
  repeatHello(sayHello, "Alice", 1000); 
  