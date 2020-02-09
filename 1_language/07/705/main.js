// .querySelectorAll creates a copy instead of using a reference
const lis = document.querySelectorAll('li');
console.log(lis);

console.log(lis[0]);
console.log(lis[1]);
console.log(lis[2]);

for (const li of lis) {
    console.dir(li);
}


// .getElementsByTagName gives you a "live-list"
// -It reflects changes live
// -For example: If you add or remove elements after performing the following assignment, then it will be reflected live - not so for .querySelectorAll --- it just takes a 'snapshot' at the point of time the assignment occurs.
const list_item_elements = document.getElementsByTagName('li');
for (const li of lis) {
    console.dir(li);
}