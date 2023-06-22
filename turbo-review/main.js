// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const str = 'I look real good today'
    // alert(str.endsWith('?'))

let sentence = 'Do I look real good today?'
    // alert(sentence.endsWith('?'))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let string = 'I am looking for a Jr. Dev position'
// console.log(string.replaceAll('Jr. Dev', 'Sofware Engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let random = Math.random()
    if (random < .33) {
        return('rock')
    } else if (random < .66) {
        return('paper')
    } else {
        return('scissors')
    }
}
// console.log(rockPaperScissors())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWinner(playerChoice) {
    let botChoice = rockPaperScissors()
    if ( (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'scissors' && botChoice === 'paper') ||
        (playerChoice === 'paper' && botChoice === 'rock')) {
        console.log('You Win!')
    } else if (playerChoice === botChoice) {
        console.log('It\'s a fat TIE!')
    } else {
        console.log('Bot Wins!')
    }
}
// checkWinner('paper')

// skipped

// *******Loops******

// Create a function that takes an array of choices.
// Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
    arr.forEach( choice => checkWinner(choice) )
}
playGameXTimes(['rock', 'paper', 'scissors'])
