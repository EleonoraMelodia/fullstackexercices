let interval;

function repeatHello(callback) {
  interval = setInterval(callback, 1000);
}

setTimeout(() => {
  clearInterval(interval), console.log("interval stopped");
}, 5000);

const callingBack = () => console.log("Hello");
repeatHello(callingBack);
