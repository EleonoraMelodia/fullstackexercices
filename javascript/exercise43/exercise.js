const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveTheObj(obj) {
  let objInString = JSON.stringify(obj);
  localStorage.setItem("user", objInString);
}

saveTheObj(user);
