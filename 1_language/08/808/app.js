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
// -
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