/* --- calculator tests --- */
// const calculator = require('./calculator');

// describe('add', () => {
// 	test('adds 0 and 0', () => {
// 		expect(calculator.add(0,0)).toBe(0);
// 	});

// 	test('adds 2 and 2', () => {
// 		expect(calculator.add(2,2)).toBe(4);
// 	});

// 	test('adds positive numbers', () => {
// 		expect(calculator.add(2,6)).toBe(8);
// 	});
// });

// describe('subtract', () => {
// 	test('subtracts numbers', () => {
// 		expect(calculator.subtract(10,4)).toBe(6);
// 	});
// });

// describe('sum', () => {
// 	test('computes the sum of an empty array', () => {
// 		expect(calculator.sum([])).toBe(0);
// 	});

// 	test('computes the sum of an array of one number', () => {
// 		expect(calculator.sum([7])).toBe(7);
// 	});

// 	test('computes the sum of an array of two numbers', () => {
// 		expect(calculator.sum([7,11])).toBe(18);
// 	});

// 	test('computes the sum of an array of many numbers', () => {
// 		expect(calculator.sum([1,3,5,7,9])).toBe(25);
// 	});
// });

// describe('multiply', () => {
// 	test('multiplies two numbers', () => {
// 		expect(calculator.multiply([2,4])).toBe(8);
// 	});

// 	test('multiplies several numbers', () => {
// 		expect(calculator.multiply([2,4,6,8,10,12,14])).toBe(645120);
// 	});
// });

// describe('power', () => {
// 	test('raises one number to the power of another number', () => {
// 		expect(calculator.power(4,3)).toBe(64); // 4 to third power is 64
// 	});
// });

// describe('factorial', () => {
// 	test('computes the factorial of 0', () => {
// 		expect(calculator.factorial(0)).toBe(1); // 0! = 1
// 	});

// 	test('computes the factorial of 1', () => {
// 		expect(calculator.factorial(1)).toBe(1);
// 	});

// 	test('computes the factorial of 2', () => {
// 		expect(calculator.factorial(2)).toBe(2);
// 	});

// 	test('computes the factorial of 5', () => {
// 		expect(calculator.factorial(5)).toBe(120);
// 	});

// 	test('computes the factorial of 10', () => {
// 		expect(calculator.factorial(10)).toBe(3628800);
// 	});
// });

/* --- palindrome tests --- */
const palindromes = require('./palindromes')

// describe('palindromes', () => {
//   test('works with single words', () => {
//     expect(palindromes('racecar')).toBe(true);
//   });
//   test('works with punctuation ', () => {
//     expect(palindromes('racecar!')).toBe(true);
//   });
//   test('works with upper-case letters ', () => {
//     expect(palindromes('Racecar!')).toBe(true);
//   });
//   test('works with multiple words', () => {
//     expect(palindromes('A car, a man, a maraca.')).toBe(true);
//   });
//   test('works with multiple words', () => {
//     expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
//   });
//   test('doesn\'t just always return true', () => {
//     expect(palindromes('ZZZZ car, a man, a maraca.')).toBe(false);
//   });
// });

/* --- fibonacci tests --- */ 

const fibonacci = require('./fibonacci')

// describe('fibonacci', () => {
//   test('4th fibonacci number is 3', () => {
//     expect(fibonacci(4)).toBe(3);
//   });
//   test('6th fibonacci number is 8', () => {
//     expect(fibonacci(6)).toBe(8);
//   });
//   test('10th fibonacci number is 55', () => {
//     expect(fibonacci(10)).toBe(55);
//   });
//   test('15th fibonacci number is 610', () => {
//     expect(fibonacci(15)).toBe(610);
//   });
//   test('25th fibonacci number is 75025', () => {
//     expect(fibonacci(25)).toBe(75025);
//   });
//   test('doesn\'t accept negatives', () => {
//     expect(fibonacci(-25)).toBe("OOPS");
//   });
//   test('DOES accept strings', () => {
//     expect(fibonacci("1")).toBe(1);
//   });
//   test('DOES accept strings', () => {
//     expect(fibonacci("2")).toBe(1);
//   });
//   test('DOES accept strings', () => {
//     expect(fibonacci("8")).toBe(21);
//   });
// });

