function repeatHello(callback) {
  let mycallback = setInterval(callback, 1000);
}

repeatHello (()=> console.log("hello"));