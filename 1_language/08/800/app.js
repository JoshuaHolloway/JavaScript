const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = new Array(); // Same as []
console.log(arr2);

const arr3 = new Array(1, 5);
console.log(arr3);

const arr4 = new Array(5);
console.log(arr4);

const arr5 = Array(5); // same
console.log(arr5);

const arr6 = Array.of(1, 2);
console.log(arr6);

// Convert an itterable (or an array-like-object) into an array
const arr7 = Array.from(arr1);
console.log(arr7);

const arr8 = Array.from("Hello");
console.log(arr8);

const arr9 = Array.from("Hello");
console.log(arr8);

// Node-list is an itterable (and array-like-object)
const node_items = document.querySelectorAll('li');
console.log(node_items);

const arrayListItems = Array.from(node_items);
console.log(arrayListItems);

// -We can now do anything with this converted node_list 
//  that we can do with real-arrays.