// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      console.log("The salary is 2200");

      break;
    case "manager":
      console.log("The salary is 1800");

      break;
    case "cto":
      console.log("The salary is 1800");

      break;
    case "developer":
      console.log("The salary is 1500");
      break;
    case "other":
      console.log("The salary is 1000");
      break;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
