let person = {
    name: 'josh',
    greet: function () {
        alert('hi from method');
    }
};

// ...

person = {
    name: 'josh',
    greet: function () {
        alert('hi from method');
    },
    added_property: true
};

// ...

// Can add properties like this:
person.another_added_prop = true;

console.log(person.another_added_prop);

// Delete a property like this:
delete person.name;
console.log('name: ' + person.name);

// This is the same thing (but frowned upon):
person.greet = undefined;

// what is difference between null and undefined?
const x = {
    prop1: 'a'
};
delete x.prop1;
console.dir(x);
// - - - - 
const y = {
    prop2: 'b'
};
y.prop2 = null;
console.dir(y);

// -null means that the object has that property, it is just not defined yet.
// -undefined is like: Hey dude, this property doesn't even live in this freaking object!!!

