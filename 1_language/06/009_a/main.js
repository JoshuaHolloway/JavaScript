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

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, 'Enter Choice Here').toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
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
    // Generate random number in [0,1]
    const randomValue = Math.random();

    if (randomValue < 0.34)
        return ROCK;
    else if (randomValue < 0.67)
        return PAPER;
    else
        return SCISSORS;
};

// [009]: Default arguements to functions
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ? RESULT_DRAW :
        ((cChoice === ROCK && pChoice === PAPER) ||
            (cChoice === PAPER && pChoice === SCISSORS) ||
            (cChoice === SCISSORS && pChoice === ROCK)) ? RESULT_PLAYER_WINS :
            RESULT_COMPUTER_WINS;



startGameBtn.addEventListener('click', () => {

    // Only start game once:
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;

    console.log('Game is staring...');


    const playerChoice = getPlayerChoice();  // [009] might be undefined


    const computerChoice = getComputerChoice();

    // [009]
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        // We know playerChoice is undefined
        winner = getWinner(computerChoice);
    }

    console.log('Player Choice: ' + playerChoice);
    console.log('Computer Choice: ' + computerChoice);


    // [009]
    //let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    // -if playerChoice has a truty value it will be used
    // -if playerChoice has a falsy value then DEFAULT_USER_CHOICE will be used.
    //
    // -Same as:
    // let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    //
    // -Same as: 
    // let x;
    // if (playerChoice)
    //     x = playceChoice;
    // else
    //     x = DEFAULT_USER_CHOICE;
    //
    // let message = `You picked ${x}, computer picked ${computerChoice}, therefore you `;


    if (winner === RESULT_DRAW) {
        message = 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else
        message = message + 'lost';

    alert(message);
});
