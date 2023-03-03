const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	let total = 0;
  for (num of numArray)
  {
    total += num;
  }
  return total
};

const multiply = function(numArray) {
  let total = numArray[0]
  for (let i = 1; i < numArray.length; i++)
  {
    total *= numArray[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let total = a;
  for (let i = a - 1; i > 0; i--)
  {
    total *= i;
  }
  return total;
};

console.log(multiply(1,3))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
