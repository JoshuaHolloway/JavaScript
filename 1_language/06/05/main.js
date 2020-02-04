const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

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

startGameBtn.addEventListener('click', () => {

    // Only start game once:
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;

    console.log('Game is staring...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});