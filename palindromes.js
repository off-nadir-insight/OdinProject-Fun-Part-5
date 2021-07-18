const palindromes = function (str) {
  let newStrForward = ""
  let newStrReversed = ""

  for (let j = 0; j < str.length; j++) {
    if (alphabetArray.includes(str[j].toLowerCase())) {
      newStrForward += str[j].toLowerCase()
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (alphabetArray.includes(str[i].toLowerCase())) {
      newStrReversed += str[i].toLowerCase()
    }
  }
  return newStrReversed === newStrForward
};

module.exports = palindromes;

// create an array of 26 elements
// const blankArray = Array(26);

// get array of 'keys' from array (position in array) 
// [0, 1, 2, 3,...25]
// const arrayOf26 = Array.from(blankArray.keys())

// in charCode, A = 65, so add 65, and convert it to lowercase
// const alphabet = arrayOf26.map(x => String.fromCharCode(x + 65).toLowerCase())

// single line:
const alphabetArray = Array.from(Array(26).keys()).map(x => String.fromCharCode(x + 65).toLowerCase())

