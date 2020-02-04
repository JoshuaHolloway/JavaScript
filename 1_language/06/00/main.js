const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting');
}

// Can invoke synchronously:
startGame();

// Can use asynchronously via callback on event-listener:
startGameBtn.addEventListener('click', startGame);

// NOTE: We are calling addEventListener like a method off the startGameBtn Object


// RECALL: Objects can have properties and methods
const person = {

    // Property
    name: 'josh',

    // Method
    method_1: () => {
        console.log(this.name + ' from method_1!');

        // why does this.name not work here?
    }

    // RECALL: JS-Objects are really lists of key-value pairs
    // -A property is simply a variable.
    // -A method is simply when a key is a function.
};
console.log(person.name);
person.method_1();