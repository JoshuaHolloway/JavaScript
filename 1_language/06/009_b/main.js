const startGameBtn = document.getElementById('start-game-btn');

ITEMS = ['ITEMS[0]', 'ITEMS[1]', 'ITEMS[2]'];
const DEFAULT_USER_CHOICE = ITEMS[0];
const RESULTS = ['DRAW', 'PLAYER_WINS', 'COMPUTER_WINS'];

// GLOBAL!
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ITEMS[0]}, ${ITEMS[1]}, or ${ITEMS[2]}`, 'Enter Choice Here').toUpperCase();

    if (
        selection !== ITEMS[0] &&
        selection !== ITEMS[1] &&
        selection !== ITEMS[2]
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);

        // [009]
        // return DEFAULT_USER_CHOICE;
        return;
    }
    return selection;
}

// have computer make choice
const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) return ITEMS[0];
    else if (randomValue < 0.67) return ITEMS[1];
    else return ITEMS[2];
};

// [009]: Default arguements to functions
// [009_b]: Only undefined as second arguement will use default.
//          -Other falsy values will not work.
//          -https://developer.mozilla.org/en-US/docs/Glossary/Falsy
//          ***********************************************************************
//          -No parameter or undefined as second parameter work with defaults only.
//          ***********************************************************************
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ? RESULTS[0] :
        ((cChoice === ITEMS[0] && pChoice === ITEMS[1]) ||
            (cChoice === ITEMS[1] && pChoice === ITEMS[2]) ||
            (cChoice === ITEMS[2] && pChoice === ITEMS[0])) ? RESULTS[1] :
            RESULTS[2];

startGameBtn.addEventListener('click', () => {

    // Only start game once:
    if (gameIsRunning) return;
    gameIsRunning = true;

    console.log('Game is staring...');

    const playerChoice = getPlayerChoice();  // [009] might be undefined
    const computerChoice = getComputerChoice();

    // [009]
    let winner;
    if (playerChoice) winner = getWinner(computerChoice);
    else winner = getWinner(computerChoice); // We know playerChoice is undefined

    // [009_b]
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;

    if (winner === RESULTS[0]) message = 'had a draw.';
    else if (winner === RESULTS[1]) message = message + 'won.';
    else message = message + 'lost';

    alert(message);
});
