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
const removed = z.splice(1, 3, 'a', 'b');
console.log(z);
console.log(removed);

// negative indices wrap around (start at 5 and delete one elem)
z = [0, 1, 2, 3, 4, 5];
z.splice(-1, 1);
console.log(z);

// start at 4 and delete 2-elems
z = [0, 1, 2, 3, 4, 5];
z.splice(-2, 2);
console.log(z);