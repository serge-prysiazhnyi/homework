document.write('1)');
document.write('<br>');
let A = [];
let B = [];
A.length = 10;
nextNumber:
for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 100);
    
    for (j = 2; j < A[i]; j++) {
        if (A[i] % j == 0 || A[i] == 0 || A[i] == 1 ) {
            continue nextNumber; 
        }
    }
    B.push(A[i]);
}
let min = A[0];
let max = A[0];
let minItemNumber = 0;
let maxItemNumber = 0;
for (i = 0; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
        minItemNumber = i;
    }
    if (A[i] > max) {
        max = A[i];
        maxItemNumber = i;
    }
}
document.write("Массив A: " + A);
document.write('<br>');
document.write("Массив B: " + B);
document.write('<br>');
document.write("Min: " + min);
document.write('<br>');
document.write("Max: " + max);
// 2
document.write('<br>');
document.write('2)');
B.splice(0, B.length)
if (minItemNumber < maxItemNumber) {
    for (i = minItemNumber + 1; i < maxItemNumber; i++) {
        B.push(A[i]);
    }
} else {
    for (i = maxItemNumber + 1; i < minItemNumber; i++) {
        B.unshift(A[i]);
    }
}
document.write('<br>');
document.write("Массив B: " + B);
// 3
document.write('<br>');
document.write('3)');
let buffer = 0;
buffer = A[minItemNumber];
A[minItemNumber] = A[maxItemNumber];
A[maxItemNumber] = buffer;
document.write('<br>');
document.write("Min: " + A[minItemNumber]);
document.write('<br>');
document.write("Max: " + A[maxItemNumber]);
// 4
document.write('<br>');
document.write('4)');
document.write('<br>');
document.write("Массив A: " + A);
let temp;
for (i = 0, j = A.length - 1; i < j; i++, j--) {
    temp = A[j];
    A[j] = A[i];
    A[i] = temp;
}
document.write('<br>');
document.write("Перевернутый массив A: " + A);
//  5
document.write('<br>');
document.write('5)');
j = 0;
for (i = 0; i < A.length; i++) {
    if (A[0] >= min + 5) {
        j++
    }
}
document.write('<br>');
document.write("Количество элементов отличающихся от минимального на 5: " + j);
// 6
document.write('<br>');
document.write('6)');
buffer = 0;
C = [];
D = [];
C.length = 10;
D.length = 10;
let eqNum = 0;
for (i = 0; i < C.length; i++) {
    C[i] = Math.floor(Math.random() * 100);
}
for (i = 0; i < D.length; i++) {
    D[i] = Math.floor(Math.random() * 100);
}
for (i = 0; i < C.length; i++) {
    for (j = 0; j < D.length; j++) {
        if(C[i] == D[j]) {
            buffer = C[0];
            C[0] = C[i];
            C[i] = buffer;
            C.shift();
            buffer = D[0];
            D[0] = D[j];
            D[j] = buffer;
            D.shift();
            eqNum++;
        }
    }
}
document.write('<br>');
document.write('Массив C: ' + C);
document.write('<br>');
document.write('Массив D: ' + D);
document.write('<br>');
document.write('Количество повторяющихся элементов: ' + eqNum);