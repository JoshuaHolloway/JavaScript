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

// [808]: includes() is good for primitive data 
//        (like indexOf)
console.log(y.includes('c'));

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

// [810]: map()
// -Map returns a value for each element of the array
// -Returns a new array (with new memory address)
const A = [1, 2, 3, 4];
const B = A.map((val, idx, arr) => {
    const j = val * val;
    return j;
});
console.log(A);
console.log(B);

// -Map all values from a specific property in an array of objects into an array of values:
// https://stackoverflow.com/a/46694321
//let result = objArray.map(a => a.foo);
//of
//let result = objArray.map(({ foo }) => foo)
const obj_array = [{a: 'josh', b: 'tulsa'}, {a: 'steve', b: 'florida'}];
const arr = obj_array.map(x => x.a);
console.log('Array of specific property from array of objects:');
console.log(arr);

const obj = {
    x: [{a: 'josh', b: 'tulsa'}, {a: 'steve', b: 'florida'}],
    get_x: function() {
        return this.x.map(v => v.a);
    }
};

obj.get_x();