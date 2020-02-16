const x = [1, 2];
const y = [3, 4];

const z = x.concat(y);

console.log(x);
console.log(y);
console.log(z);

// A copy by VALUE has occured
x.push(['a', 'b'])
console.log(z);

y.push(['i', 'j']);
console.log(z);

z.push(['s', 't'])
console.log(x);
console.log(y);