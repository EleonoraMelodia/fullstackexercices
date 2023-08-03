function sumUntil(maxValue) {
let result = 1;
for (let i = 1; i <= maxValue; i++) {
result= result * i;
  
}
  return result
};

console.log(sumUntil(5));