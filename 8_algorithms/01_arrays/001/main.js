function arrConcat(arr1, arr2) {

    let newArr = [];
    let i;
    for (i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        newArr[i++] = arr2[j];
    }
    return newArr;
}
// ========================
let arr1 = ['a', 'b'];
let arr2 = [1, 2];
arr3 = arrConcat(arr1, arr2);
let input_1 = document.getElementById('input-1');
let input_2 = document.getElementById('input-2');
let output = document.getElementById('output');
input_1.innerHTML = arr1;
input_2.innerHTML = arr2;
output.innerHTML = arr3;