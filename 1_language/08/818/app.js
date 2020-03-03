// [818]: Sets
const empty_set = new Set();
console.log(empty_set);

// Constructor takes array as arg
const ids = new Set([1, 2, 3]);
console.log(ids);

// We don't have access to the values via indexing:
console.log(ids[0]);

// We have the following methods:
// -add
// -clear
// -delete
// -entries
// -forEach
// -has
// -keys
// -size
// -values

const does_set_have = x => {
    if(ids.has(x))
        console.log(`the set has ${x}`);
    else
        console.log(`the set does NOT have ${x}`);
}

does_set_have(4);

ids.add(4);
does_set_have(4);

console.clear();

// .entries() retuns an itterable
// -It has eave value twice in an array
//  to match the way the .entries() method
//  works with map so you can swap between 
//  map and set relatively easily
for (const entry of ids.entries())
    console.log(entry);

// .values() is just like .entries,
// except it returns an itterable with
// only each element once instead of twice
// as is done with .entries()
for (const entry of ids.values())
    console.log(entry);


// .delete() just deletes an element
ids.delete(1);
does_set_have(1);