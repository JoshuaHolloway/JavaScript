const x = [30, 'josh', { y: [3, 'b'] }]
console.log(x);

// 2d-arrays
const matrix = [[1, 2], [3, 4]];
console.log(matrix);

for (const arr of matrix) {
    for (const elem of arr) {
        console.log(elem);
    }
}


console.log('Indexing into 2D:' + matrix[0][1]);