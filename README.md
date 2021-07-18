run `npm run test` to test

# OdinProject
TheOdinProject Fundamentals Part 5 challenge

[Fundamentals - Part 5](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-5)

## Includes the following exercises:
* calculator
* palindromes
* fibonacci
* getTheTitles
* findTheOldest

### Exercise 08 - Calculator

The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value take a look at the spec file that houses the Jest test cases.

### Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

#### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

### Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```

### Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```

#### Hints

- You should use a built-in javascript method to do most of the work for you!

### Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

#### Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.