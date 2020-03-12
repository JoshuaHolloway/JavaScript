const swap = (arr, idx, jdx) => {

    const temp = arr[idx];
    arr[idx] = arr[jdx];
    arr[jdx] = temp;
}
// ==============================================

const replace_and_shift_right = (arr, idx_from, idx_to) => {

    //   0  1  2  3  4  5  6
    // ([0, 1, 2, 3, 4, 5, 6], 4, 1)  =>  [0, 4, 1, 2, 3, 1, 6]

    const x = arr[idx_from];
    // for (let i = idx_to; i < idx_from; ++i) {
    for(let i = idx_from; i > idx_to; ++i) {
        arr[i] = arr[i-1];
    }

    return arr;
}

// ==============================================

const book_version = (A) => {
    console.log(`Start of function: A = ${A}`);
    for (let j = 1; j < A.length;  ++j) {
        
        const key = A[j];

        // Insert A[j] into the sorted sequence A[1...j-1]
        let i = j - 1;
        while(i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;

        console.log(`Iteration: ${j-1}, A: ${A}`);
    }
}

let A = [5,2,4,6,1,3];
book_version(A);
// console.log(A);
// ==============================================

// let B = [0,1,2,3,4,5,6];
// replace_and_shift_right(B, 4, 1);
// console.log(B);

