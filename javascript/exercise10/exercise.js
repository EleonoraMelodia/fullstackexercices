/*# Optional Chaining In this example we are trying to check 
if a value for the `city` property is defined. However, the code can be simplified. How can we do that?*/

const order = {
  customer: {
    address: {
  city: {"Palermo"}
    },
  },
};



let doescityexist = order.customer.address?.city;
if(!doescityexist){
  console.log ("City is required!");}
  else{
    console.log("Registered Successfully!")
  }