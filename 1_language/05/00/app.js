// function and global scope:
var Name = 'alen';
var Name = 'steve';

// block scope:
let name = 'josh';
// let name = 'steve'; // will throw error!

function greet() {
    let age = 36;
    let name = 'holloway';
    console.log(name, age);
}

greet();
console.log(age);