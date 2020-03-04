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