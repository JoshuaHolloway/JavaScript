// ==================================
const sumUp = (resultHandler, ...numbers) => {

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }

    // [012]
    //return sum;
    resultHandler(sum);
};
//==============================
const showResult = (result) => {
    alert('The result after adding all numbers is ' + result);
};
//===========================================
const subtractUp = function (resultHandler) {
    let sum = 0;
    for (const num of arguements) {
        sum -= num;
    }
    resultHandler(sum);
}

// [012]
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);