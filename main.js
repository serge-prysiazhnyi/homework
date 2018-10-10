// 1
console.log('#1');
function fillArray() {
    let n = +prompt("n = ?","");
    let m = +prompt("m = ?","");
    let A = [];
    A.length = n;
    for (i = 0; i < A.length; i++) {
        A[i] = new Array(m);
    }
    for (i = 0; i < A.length; i++) {
        for (j = 0; j < A[i].length; j++) {
            A[i][j] = Math.floor(Math.random() * 90 + 10);
        }
    }
    return A;
}
console.log(fillArray());
// 2
console.log('#2');
let A = [2, 5, "str", 6, 7, 43, "str", 9, "str",];
let B = ["str", 5, 56, 3, 78, 24, "str", 4, 8, "str",];
function compareArray(A, B) {
    let sumA = 0;
    for (i = 0; i < A.length; i++) {
        if (typeof A[i] == "number") {
            sumA += A[i];
        }
    }
    let sumB = 0;
    for (i = 0; i < B.length; i++) {
        if (typeof B[i] == "number") {
            sumB += B[i];
        }
    }
    if (sumA > sumB) {
        return A;
    }   else {
        return B;
    }
}
console.log(compareArray(A, B));
// 3
console.log('#3');
let x = +prompt('x = ?','');
let y = +prompt('y = ?','');
let znak = prompt('znak = ?','');
function doMath(x, znak, y) {
    var res = 0;
    switch (znak) {
        case '+': 
        res = x + y;
        break;
        case '-': 
        res = x - y;
        break;
        case '*': 
        res = x * y;
        break;
        case '/': 
        res = x / y;
        break;
        case '%': 
        res = x % y;
        break;
        case '^': 
        res = x ^ y;
        break;
    }
    return res;
}
console.log(doMath(x, znak, y));
// 4 
console.log('#4');
let str = "hello world";
function removeLetters(l1, l2) {
    // var l1;
    // var l2;
    A = [];
    B = [];
    A = str.split('');
    for (i = 0; i < A.length; i++) {
        if (A[i] !== l1 && A[i] !== l2) {
            B.push(A[i]);
        }
    }
    return B.join('');
}
console.log(removeLetters("l","d"));
// 5
console.log('#5');
A = [4, 23, 5, 64, 78, 4, 62, 7];
function filter(Arr, callback) {
    var newArr = [];
    for (var i = 0; i < Arr.length; i++) {
        if (callback(Arr[i]) == true) {
            newArr.push(Arr[i]);
        }
    }
    return newArr;
}
function isEven(x) {
    return x % 2 == 0;
}
console.log(filter(A, isEven));