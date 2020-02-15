let person = {
    'first name': 'josh',
    'last-name': 'holloway',
    greet: function () {
        alert('hi from method');
    }
};

// -Everything you can use as a variable can be used as a key name
// -Vice versa is not true
//  --Variables are stricter than key names
//  --Keys are more flexible
console.log(person['first name']);
console.log(person['last-name']);