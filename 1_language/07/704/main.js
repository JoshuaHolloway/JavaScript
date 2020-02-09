const input = document.querySelector('input');
console.log(input);
console.dir(input);

input.value = 'MODIFIED';

// -Look at the HTML code in the browser
// -The attribute is not changed.
// -The data-flows in one-direction with the .value property:
//      --From attribute to property
//      --Some other attributes have 2-way-data-flow
//          ---Such as class
// -You can confirm this by changing the value attribute in the browser and then looking at the property (input.value), and it is changed.