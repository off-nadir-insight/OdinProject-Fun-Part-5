const fibonacci = function(counter) {
  if (counter < 0) {
    return "OOPS"
  }
  if (counter == 1) {
    return 1;
  }
  if (counter == 2) {
    return 1;
  }
  return fibonacci(counter - 1) + fibonacci(counter - 2)
};

/* alternate approach that came up in checking solution */
/* "memoization" - keeps the computed result stored in an array for future reference */
/* said to be of time complexity O(n) where recursion is O(2^n) */

// function fibonacci(index, cache = []) {
//   if (index < 0) {
//     return "OOPS"
//   }
//   if (cache[index]) {
//     return cache[index] 
//   }
//   else {
//     if (index < 3) return 1
//     else {
//       cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache)
//     }
//   }
//   return cache[index];
// }

module.exports = fibonacci;
