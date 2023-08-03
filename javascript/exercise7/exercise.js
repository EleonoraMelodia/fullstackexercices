function printName() {
  let helloName = "Hello John";
  function inner() {
    setTimeout(function () {
      return helloName;
    }, 1000);
  }
  return inner;
}
console.log(printName()());
