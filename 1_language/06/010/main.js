// ==================================
// Fake variable number of arguements with an array passed in
const sumUp = (numbers) => {
    let sum = 0;
    for (let num of numbers)
        sum += num;
    return sum;
};
console.log(sumUp([1, 5, 10, -3, 6, 10, 25, 88]));
// ==================================
// Rest Operator: Variable number of arguments
// -An array is built dynamically with the arguements passed in
const sumUp2 = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sumUp2(1, 5, 10, -3, 6, 10, 25, 88));
// ==================================
// Rest Operator must be the last arguement in the parameter list
const sumUp3 = (x, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
const y = 0;
console.log(sumUp3(y, 1, 5, 10, -3, 6, 10, 25, 88));
// ==================================
// -Can only have one rest operator in each function
// const sumUp4 = (...numbers, ...people) => {
//     console.log('hi');
// }
// sumUp4(1, 2, 3, 4, 5, 6); // ERROR!
// ==================================
// arguments keyword:
// -Old-school way of doing variable num of args
const f = function () {
    let sum = 0;
    for (const num of arguments)
        sum += num;
    return sum;
}
console.log(f(1, 2, 3));