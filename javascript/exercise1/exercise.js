// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      "the salary is" + " " + 2200;

      break;
    case "manager":
      return "the salary is" + " " + 1800;

      break;
    case "cto":
      return "the salary is" + " " + 1800;

      break;
    case "developer":
      return "the salary is" + " " + 1500;
      break;
    case "other":
      return "the salary is" + " " + 1000;
      break;
      default: 
      return "doesn't work here"
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
