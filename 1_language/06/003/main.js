const startGameBtn = document.getElementById('start-game-btn');

// [03]:
// -If you try to invoke start here it is will break
//start();
// Uncaught ReferenceError: Cannot access 'start' before initialization at main.js:5

// Function EXPRESSION Syntax:
// const start = function startGame() {
//     console.log('Game is starting');
// }

// [03]: Function Expressions are HOISTED
//       but not initialized (undefined)


// [03]:
// -You can obviously invoke start here:
//start();

//----------------------------------

// [03]:
// -This works fine:
start();
// Uncaught ReferenceError: Cannot access 'start' before initialization at main.js:5

// Function DECLARATION/STATEMENT Syntax:
function start() {
    console.log('Game is starting');
}


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// [03]
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// Can invoke synchronously:
//startGame();

// Can use asynchronously via callback on event-listener:
//startGameBtn.addEventListener('click', startGame);

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
// start(); // Instead of startGame()

// This is a FUNCTION EXPRESSION:
// const start = function startGame() {
//     console.log('Game is starting');
// }

// This is a FUNCTION DECLARATION/STATEMENT:
// function startGame() {
//     console.log('Game is starting');
// }