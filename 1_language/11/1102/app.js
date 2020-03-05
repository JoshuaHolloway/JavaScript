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

    // -Creates empty object
    // this = {};
    // -Addes the properties below.
    // -Then returns this

    this.name = 'josh';
    this.pet = 'dog';
    this.green = () => {
        console.log(`I'm ${this.name}`);
    };
}
const person2 = new Person2();
person2.greet();

// Doesn't work without new keyword
// const person3 = Person2();

// ================================

// [1102]: Prototypes
// -Every constructor function you build has a special prototype property
// -Which is not added to the objects we create based on it
//  because its not part of the function body, but instead 
//  a property of that function object.
// -Recall: Functions ARE objects!
// -The prototype is there by default
//  (we can also edit it).
// -It is automatically assigned as a prototype
//  to the object which is created when we instantiate that
//  constructor function.
// -A prototype is an object itself
//  (and every object has such a prototype).
// -Prototypes are how objects share code.
// -You should think of prototypes as fallback objects.
//      Prototype Objects == "Fallback Objects"

const p = new Person();
p.greet();
console.log(p.toString());
// .toString() is a method that is prototypically inheritted