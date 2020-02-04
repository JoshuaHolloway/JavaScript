const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
    console.log('Game is starting');
}

// Can invoke synchronously:
startGame();

// Can use asynchronously via callback on event-listener:
startGameBtn.addEventListener('click', startGame);

// NOTE: We are calling addEventListener like a method off the startGameBtn Object

// // RECALL: Objects can have properties and methods
// const person = {

//     // Property
//     name: 'josh',

//     // Method
//     method_1: () => {
//         console.log(this.name + ' from method_1!');

//         // why does this.name not work here?
//     }
// };
// console.log(person.name);
// person.method_1();


// console.log('typeof startGame: ');
// console.log(typeof startGame);

// console.log('console.log(startGame): ');
// console.log(startGame);

// NOTE the key-value pairs in the function:
// console.log('console.dir(startGame):');
// console.dir(startGame);

// => Function are Objects:
// -They are therefore stored on the heap
// -They are Reference types

// ===========================

// If you assign a function to a variable then you invole that variable name
start(); // Instead of startGame()

// This is a FUNCTION STATEMENT:
// const start = function startGame() {
//     console.log('Game is starting');
// }

// This is a FUNCTION DECLARATION:
// function startGame() {
//     console.log('Game is starting');
// }