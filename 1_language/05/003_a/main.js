// Copy by reference is default for Objects
//=======================
let x = ['apple', 'orange', 'pear'];

let y = x;

console.log('x = ' + x);
console.log('y = ' + y);

x.push('bannana');
console.log('x = ' + x);
console.log('y = ' + y);
//=======================
let person1 = { 'name': 'josh' };
let person2 = person1;

// Copy by value via Spread Operator
let person3 = { ...person1 };
// -Extract out all key-value pairs from object person
//  and copy into a new object named person3

person1['name'] = 'steve';
console.log(person1);
console.log(person2);
console.log(person3);

// With arrays:
let z = [...x];
x.push('tomatoe');
console.log('x = ' + x);
console.log('z = ' + z);
//=======================
