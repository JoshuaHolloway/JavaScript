const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


// GLOBAL!
let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, 'Enter Choice Here').toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;

}

// have computer make choice
const getComputerChoice = function () {
    // Generate random number in [0,1]
    const randomValue = Math.random();

    if (randomValue < 0.34)
        return ROCK;
    else if (randomValue < 0.67)
        return PAPER;
    else
        return SCISSORS;
};

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice)
        return RESULT_DRAW;
    else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK))
        return RESULT_PLAYER_WINS;
    else
        return RESULT_COMPUTER_WINS;
}

startGameBtn.addEventListener('click', () => {

    // Only start game once:
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;

    console.log('Game is staring...');

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log('Player Choice: ' + playerChoice);
    console.log('Computer Choice: ' + computerChoice);

    const winner = getWinner(computerChoice, playerChoice);
    console.log('Winner is: ' + winner);
});
