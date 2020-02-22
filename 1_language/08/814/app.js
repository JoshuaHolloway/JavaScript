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

// indexOf does not work with reference values
const personData = [{ name: 'Josh' }, { name: 'steve' }];
const index5 = personData.indexOf({ name: 'Josh' });
console.log(index5);
// -1 indicates not found

// ========================================================

// [807]
// -Objects are reference values
const josh = personData.find((person, index, persons) => {
    return person.name === 'Josh';
});
// -Anonymous function arguement can accept up to 3 args:
//  --1. Single object of the array
//  --2. Index of the single element
//  --3. The whole array
// -J.S. executes this anonymous function on every
//  element in the array
//      --The function returns true for the element we 
//        are looking for and false for all other elements.
//      --It will stop after finding the first instance.
console.log(josh);

// ========================================================

// [808]: includes() is good for primitive data 
//        (like indexOf)
console.log(y.includes('c'));

// ========================================================

// [809]: forEach()
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = [];
for (const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax));
}
console.log(taxAdjustedPrices);

// -Arg to forEarch is a function that takes up to 3-args:
//  1. Current value
//  2. Index
//  2. Whole array
prices.forEach((val, idx, arr) => {
    console.log(`val: ${val}, idx: ${idx}, arr: ${arr}`);
});

// ========================================================

// [810]: map()
// -Map returns a value for each element of the array
// -Returns a new array (with new memory address)
const A = [5, 2, 0, 4];
const B = A.map((val, idx, arr) => {
    const j = val * val;
    return j;
});
console.log(A);
console.log(B);

// ========================================================

// [811]: sort() and reverse()
const X = [10.99, 5.99, 3.99, 4.56];
let X_sorted = X.sort();
console.log(X_sorted);

// Default .sort() converts the contents to strings and compares
// only the first character

// Here is sorting with custom sorting rule:
let X_sorted_2 = X.sort((a, b) => {
    if (a > b)
        return 1;
    else if (a === b)
        return 0;
    else
        return -1;
});
console.log(X_sorted_2);

// reverse() just reverses the array ;)
let X_reversed = X_sorted_2.reverse();
console.log(X_reversed);

// ========================================================

// [812]: filter()

// filter() takes a function that is executed on each element
let filtered = X.filter((x, idx, arr) => {
    return x > 4;
});

// Returns a subset of the array
console.log(filtered);

// ========================================================

// [813]: Where arrow functions shine
filtered = X.filter(x => x > 4);

// Returns a subset of the array
console.log(filtered);

// ========================================================

// [814]: reduce()
const a = [1, 2, 3];
const init_value_to_start_at = 0;
const sum = a.reduce((prevVal, currVal, currIndex, array) => {

    // Return updated (currently reduced value)
    return prevVal + currVal;

}, init_value_to_start_at);
// -The func arguement is executed for every value in the array
// -If second arguement is not provided then it is undefined0
//  --On the first execution, prevValue is set to init_value_to_start_at
//      ---And currValue is the first element in the array
//  --On the 2nd execution, prevVal is the previous currValue,
//    and currVal is set to the 2nd value in the array, and so on.
// -prevValue is the initial value 

console.log(`sum = ${sum}`);