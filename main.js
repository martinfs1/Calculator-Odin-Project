console.log("Hello Calculator.");

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(3, 2));

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3));

const divide = (a, b) => {
  return a / b;
};
console.log(divide(10, 2));

const operate = (op, a, b) => {
  return add(a, b);
};
console.log(operate("/", 2, 3));

const populateDisplay = () => {};
