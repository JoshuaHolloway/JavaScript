// const ul = document.querySelector('ul');
// console.log(ul);
// console.dir(ul);

// // Grab all children
// const children = ul.children;
// console.dir(children);

// // Grab the 1st element
// const child = children[0];
// console.log(child);

// child_nodes = ul.childNodes;
// // White-space/line-break are treated as children?!?!?!
// // That's f'd up man
// console.log(child_nodes);
// // Aint nobody got time for that!

// // Get last element (css-way)
// const x = document.querySelector('li:last-of-type');
// console.log(x);

// // More stuff:
// const a = ul.firstChild;
// console.log(a);

// const b = ul.firstElementChild;
// console.log(b);

// const d = ul.lastChild;
// console.log(d);

// const c = ul.lastElementChild;
// console.log(c);


// [707]
const liFirst = document.querySelector('li');
console.log(liFirst);

const x = liFirst.closest('body');
console.log(x);

// Only works with ancestors (header is a sibling)
const y = liFirst.closest('header');
console.log(y); // returns null