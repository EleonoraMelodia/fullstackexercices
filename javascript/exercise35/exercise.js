function repeatHello(callback) {
  return setInterval(callback, 1000);
}

const callingBack = () => console.log("Hello");

repeatHello(callingBack);
