const startGameBtn = document.getElementById('start-game-btn');

// Function EXPRESSION Syntax:
// const start = function startGame() {
//     console.log('Game is starting');
// }

// Can assign a name on right side or not - same behavior:
const start = function () {
    console.log('Game is starting');

    // This will throw error
    console.log(age);
}
// -Advantages to using function Expression (or Statement/Declaration)
//  for callback instead of ananomous function:
// --Better console errors:
startGameBtn.addEventListener('click', start);
// ---This will thow error like this:
//  main.js:13 Uncaught ReferenceError: age is not defined
//             at HTMLButtonElement.start (main.js:13)
// --If this were an "in-place" anonymous function it would give an error like this:
//  main.js:22 Uncaught ReferenceError: age is not defined
//             at HTMLButtonElement.<anonymous> (main.js:22)
// --Note  .start  vs  .<anynomous>
//
// --If you just use the syntax as below, then you will get the good error:
// startGameBtn.addEventListener('click', function startGame() {
//     console.log('Game is starting');

//     // This will throw error
//     console.log(age);
// });



// Can invoke synchronously:
start();

// Can use asynchronously via callback on event-listener:
//startGameBtn.addEventListener('click', start);

// -Using Anonomous Function not assigned to a variable:
//startGameBtn.addEventListener('click', () => console.log('Game is starting!'));
// -In place anomous function usage for callbacks guarantees we do not create a memory leak.

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// [04]
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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