const x = [1, 2, 3, 4, 5, 6];
const x2 = x; // Copy by referece

// Creates new copy
const y = x.slice(); // Copy by value

// Modify x:
x.push(7);

// x2 is copy by reference so changing x changes x2 :(
console.log(x);
console.log(x2);

// y is copied by value so changing x doesn't affect y :)
console.log(y);


// Slice can also be used to extract a sub-set of the array:
const start_index = 1;
const end_index = 4;
const z = x.slice(start_index, end_index);
console.log(z);

// Negative indexes work (of course they do - geeze javascript is so awesome!)