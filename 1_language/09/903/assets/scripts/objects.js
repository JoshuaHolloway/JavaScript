let person = {
    'first name': 'josh',
    'last-name': 'holloway',
    greet: function () {
        alert('hi from method');
    },

    // [903]
    1.5: 'hello'
};

// -Everything you can use as a variable can be used as a key name
// -Vice versa is not true
//  --Variables are stricter than key names
//  --Keys are more flexible
console.log(person['first name']);
console.log(person['last-name']);

// [903]
// The is really converted to string behind the scenes (coersion)
console.log(person[1.5]);

// NOTE:
// -Objects properties keep their order
// -EXCEPT: Number keys (they are sorted)