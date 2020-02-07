const x = document.getElementById('main-title');
console.log(x);
console.dir(x);

console.log('================================================');

const y = document.getElementById('main-list');

// -Can search child nodes to this node
// -Can use all methods besides getElementByID
const z = y.querySelector('li');
console.log(z);

console.log('================================================');
// getElementByClassName returns all elements in the class
const list_items = document.getElementsByClassName('list-item');
console.log(list_items);
for (let list_item of list_items)
    console.log(list_item);

console.log('================================================');
// -querySelector is like getElementByClassName
// -You can perform more complex queries with querySelector
// -Use CSS notation
const a = document.querySelector('.list-item');
console.log(a);

console.log('================================================');
// -querySelector grabs all the elements
// -Returns a node-list
const b = document.querySelectorAll('.list-item');
console.log(b);

console.log('================================================');
// -Can perform more complex queries like CSS
const c = document.querySelector('ul li:first-of-type');
console.log(c);