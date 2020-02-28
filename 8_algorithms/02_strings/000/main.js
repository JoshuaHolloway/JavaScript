function Arrs2Map(arr1, arr2) {

    // console.log('arr1 = ' + arr1);
    // console.log('arr2 = ' + arr2);

    if (arr1.length != arr2.length) {
        console.log('arr1.length = ' + arr1.length);
        console.log('arr2.length = ' + arr2.length);
        return null;
    }

    // Given two arrays, make an associative array containing:
    // -keys of the first
    // -values of the second

    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sconsole.log(`i: ${i}, arr1[i]: ${arr1[i]}, arr2[i]: ${arr2[i]}`);

        key = arr1[i];
        value = arr2[i];
        newArr[key] = value;
    }

    return newArr;
}

const test = Arrs2Map(['abc', 3, 'yo'], [42, 'wassup', true]);
console.log(test);

// const output = document.getElementById('output');
// output.innerHTML = test;