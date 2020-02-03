//=============================================
function shiftByOutOfPlace(arr, shiftAmmount) {
    let newArr = [];
    const N = arr.length;

    for (let i = 0; i < N; i++) {
        let newIndex = (i + shiftAmmount) % N;
        newArr[newIndex] = arr[i];
    }
    return newArr;
}
//------------------------
let arr = [0, 1, 2, 3, 4];
let newArr = shiftByOutOfPlace(arr, 2);
document.getElementById('output-1').innerHTML = newArr;
//=====================================================
function shiftRightByOne(arr) {
    const N = arr.length;
    const shiftedOff = arr[N - 1];
    for (let i = N - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = shiftedOff;
}
let arr2 = [0, 1, 2, 3, 4];
shiftRightByOne(arr2);
document.getElementById('output-2').innerHTML = arr2;
//------------------------------------------
function shiftByInPlace(arr, shiftAmmount) {
    const N = arr.length;
    for (let i = 0; i < shiftAmmount; i++) {
        shiftRightByOne(arr);
    }
}
//-------------------------
let arr3 = [0, 1, 2, 3, 4];
shiftByInPlace(arr3, 2);
document.getElementById('output-3').innerHTML = arr3;