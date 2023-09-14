const user = {
  id: 1,
  name: "John",
  age: 25,
};

let userInJsn = JSON.stringify(user);

function saveInLocal() {
  localStorage.setItem("user", userInJsn);
}

function giveMeUserBack() {
const getUser = localStorage.getItem("user");
const userInObj = JSON.parse(getUser);
console.log(userInObj); 
}




saveInLocal();
giveMeUserBack();

