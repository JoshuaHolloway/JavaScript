const x = ['a', 'b', 'c', 'd'];


// Return index of arguement
const index = x.indexOf('a');
console.log(index);

// Optional second arg to specify index to start at
const index2 = x.indexOf('a', 2);
console.log(index2); // not found

// Search stops at first found entry
const y = ['a', 'b', 'c', 'd', 'a', 'e'];
const index3 = y.indexOf('a');
console.log(index3);

// Start searching from right
const index4 = y.lastIndexOf('a');
console.log(index4);