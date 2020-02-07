const h1 = document.querySelector('h1');

console.log(h1.textContent);
console.log(h1.className);

// Change content:
h1.textContent = 'Some new text';

h1.className = 'title';

h1.style.color = 'cyan';
h1.style.backgroundColor = 'black';

// See properties available on element:
console.dir(h1);

// All properties:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement