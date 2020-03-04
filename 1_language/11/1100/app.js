class Person {
    name = 'Josh';

    constructor() {
        this.pet = 'dog';
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

const person = new Person();
person.greet();

// =============================
// "Constructor Function"
// Do same thing the oldschool way
function Person2() {
    this.name = 'josh';
    this.pet = 'dog';
    this.green = () => {
        console.log(`I'm ${this.name}`);
    };
}
const person2 = new Person2();
person2.greet();