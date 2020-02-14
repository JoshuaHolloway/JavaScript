x = ['a', 'b', 'c'];

// start index
// number of items to delete
x.splice(1, 0, 'z');
console.log(x);

x.splice(1, 0, 'g');
console.log(x);

x.splice(1, 3);
console.log(x);

// splice deletes the elems and then inserts the new elems
z = [1, 2, 3, 4, 5];
z.splice(1, 3, 'a');
console.log(z);

