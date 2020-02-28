// Comparing two objects compare their address
//=======================
const person1 = { age: 30 };
const person2 = { age: 30 };
console.log('person1 === person2: ', person1 === person2);
//=======================
const person3 = person1;
console.log('person1 === person3: ', person1 === person3);
//=======================
// Can add or change attributes on const's
const person = { age: 65 };
person.age = 35;
const hobbies = ['sports'];
hobbies.push('cooking');

// Just can't reassign to constants
hobbies = ['jogging', 'fishing'];
person = { 'name': 'josh' };