// ==================================
const combine = (resultHandler, operation, ...numbers) => {

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let accum = 0;
    for (const num of numbers) {
        if (operation === 'ADD')
            accum += validateNumber(num);
        else
            accum -= validateNumber(num);
    }

    // [013]
    // resultHandler(accum, 'The result after adding is: ');
    resultHandler(accum);
    // arguements set in .bind come after the already configured aruements
};
//===========================================
const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};
//===========================================
const subtractUp = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers)
        sum -= num;
    resultHandler(sum, 'The result after subtracting is:  ');
}
//===========================================
// [013]
// Can't do this because we don't yet know what x is!!!
// combine(showResult(x, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
// combine(showResult(x, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 5, 10, -3, 6, 10, 25, 88);

// .bind() creates a new function reference which is preconfigured regarding the arguemtns it receives
combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'Not a Number :)', -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 5, 10, -3, 6, 10, 25, 88);


