/*
# Callback

Write a function called printAsyncName, which takes a callback and a string(which will be name) as parameters. The callback function will simply print "Hello". 
The printAsyncName function will have to execute the callback function after an interval of 1 second. After an interval of 2 seconds,
 we must print the name that we take as a parameter.

Tips:
- The `setInterval` method will be useful*/

function printAsyncName(callback, string) {
  const callInterval = setInterval(() => {
    callback();
  }, 1000);
  const nameInterval = setInterval(() => {
    console.log(string);
  }, 2000);
}

const sayHello = () => console.log("hello");
printAsyncName(sayHello, "Chris"); 
