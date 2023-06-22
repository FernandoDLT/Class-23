//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.

let nums = [10, 20, 3, 16, 5]
// alert(nums.reduce((acc, c) => acc + c, 0))
// acc = accumulator
// c = curent value
// Can be called whatever we want

// Create a function that takes in an array of numbers,
// Return a new array of numbers that is every original number squared

let newArr = nums => nums.map(num => num ** 2)
// console.log(newArr(nums))

// Create a function that takes string,
// Print the reverse of that string to the console

let toReverse = str => console.log(str.split('').reverse().join(''))
// toReverse('banana')/
// let str = 'banana'
// str = str.split('').reverse().join('')
// console.log(str)

// Create a function that takes in a string
// Alert if the string is a palindrome or not

const palindromeCheck = str => alert(str === str.split('').reverse().join(''))
palindromeCheck('racecar')

// ********Objects******

// let stopwatch = {}

// stopwatch.currentTime = 12

// stopwatch.tellTime = function(time) {
//     console.log(`The current time is ${time}.`)
// }

// stopwatch.tellTime(stopwatch.currentTime)

// let dog = {}

// dog.breed = 'mastiff'
// dog.color = 'black'
// dog.name = 'kumba'
// dog.legs = 4
// dog.size = 'large'
// dog.bark = function() {
//     console.log('WOOF')
// }
// dog.fetch = function() {
//     console.log('ZOOO')
// }
// dog.attack = function() {
//     console.log('Bite')
// }

