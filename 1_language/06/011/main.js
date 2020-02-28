// ==================================
// Rest Operator: Variable number of arguments
const sumUp = (...numbers) => {

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    return sum;
}
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
