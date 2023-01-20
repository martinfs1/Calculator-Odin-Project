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

const numsPad = [];
for (let i = 0; i < 10; i++) {
  numsPad.push(i);
}

// const num0 = document.querySelector("#btnZero");
// numsPad.push(Number(num0.textContent));
// num0.addEventListener("click", populateDisplay);

// const num1 = document.querySelector("#btnOne");
// numsPad.push(Number(num1.textContent));
// num1.addEventListener("click", populateDisplay);

// const num2 = document.querySelector("#btnTwo");
// num2.addEventListener("click", populateDisplay);
// numsPad.push(Number(num2.textContent));

// const num3 = document.querySelector("#btnThree");
// num3.addEventListener("click", populateDisplay);
// numsPad.push(Number(num3.textContent));

// const num4 = document.querySelector("#btnFour");
// num4.addEventListener("click", populateDisplay);
// numsPad.push(Number(num4.textContent));

// const num5 = document.querySelector("#btnFive");
// num5.addEventListener("click", populateDisplay);
// numsPad.push(Number(num5.textContent));

// const num6 = document.querySelector("#btnSix");
// num6.addEventListener("click", populateDisplay);
// numsPad.push(Number(num6.textContent));

// const num7 = document.querySelector("#btnSeven");
// num7.addEventListener("click", populateDisplay);
// numsPad.push(Number(num7.textContent));

// const num8 = document.querySelector("#btnEight");
// num8.addEventListener("click", populateDisplay);
// numsPad.push(Number(num8.textContent));

// const num9 = document.querySelector("#btnNine");
// num9.addEventListener("click", populateDisplay);
// numsPad.push(Number(num9.textContent));

console.log(numsPad);

const btnClicked = document.querySelectorAll("button");
btnClicked.forEach((btn) => {
  btn.addEventListener("click", console.log(btn.textContent));
});

function populateDisplay() {
  const dsply = document.querySelector("#dsply");
  for (let i = 0; i < 10; index++) {
    if (i) {
    }
  }
}
