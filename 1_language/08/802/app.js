const x = ['a', 'b'];

// push adds at end of array
let new_len = x.push('c');
console.log(x);
console.log('New length: ' + new_len);

// unshift adds to front of array
// -shifts all elements to the right with wraparoud
new_len = x.unshift('z');
console.log(x);
console.log('New length' + new_len);

// pop removes the last element and returns it
const popped = x.pop();
console.log(x);
console.log(popped);


// shift() removes an item at the frong:
// -shift all to left by one element
const shifted = x.shift();
console.log(x);
console.log('shifted off: ' + shifted);

x[1] = 'NEW';
console.log(x);

// Creates empty spots
// -Don't do this :)
x[5] = 'NEW-2';
console.log(x);