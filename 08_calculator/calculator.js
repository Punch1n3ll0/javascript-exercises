const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	if (arr.length === 0) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) => product * number, 1);
};

const power = function(num, pow) {
  return Math.pow(num, pow);
	
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
	return num * factorial(num -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
