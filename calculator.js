const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((total, ele) => {
    return total + ele 
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((output, ele) => {
    return output * ele
  }, 1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(n) {
	if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1)
  
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
