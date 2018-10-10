// 1
document.write("1)" + "<br>");
let n = +prompt('Число елементов в массиве','');
let Arr = [];
let temp;
Arr.length = n;
for (i = 0; i < Arr.length; i++) {
    Arr[i] = Math.floor(Math.random() * 10);
}
document.write(Arr + "<br>");
if (Arr.length % 2 == 0) {
    for (i = 0, j = 1; j < Arr.length; i += 2, j += 2) {
        temp = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = temp;
    }
}   else {
    for (i = 0, j = 1; j < Arr.length - 1; i += 2, j += 2) {
        temp = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = temp;
    }
}
document.write(Arr + "<br>");
// 2
document.write("2)" + "<br>");
n = 10;
let m = 20;
Arr = new Array(n);
for (i = 0; i < Arr.length; i++) {
    Arr[i] = new Array(m);
}
for (i = 0; i < Arr.length; i++) {
    for (j = 0; j < Arr[i].length; j++) {
        Arr[i][j] = Math.floor(Math.random() * 90 + 10);
    }
}
let rowSum = 0;
let min;
let max;
let minRowNumber = 0;
let maxRowNumber = 0;
for (i = 0; i < 1; i++) {
    for (j = 0; j < m; j++) {
        rowSum += Arr[i][j];
        min = rowSum;
        max = rowSum;
    }
}
rowSum = 0;
for (i = 0; i < Arr.length; i++) {
    for (j = 0; j < Arr[i].length; j++) {
        rowSum += Arr[i][j];
    }
    if (min > rowSum) {
        min = rowSum;
        minRowNumber = i;
    }
    if (max < rowSum) {
        max = rowSum;
        maxRowNumber = i;
    }
    rowSum = 0;
}

for(j = 0; j < m; j++) {
    temp = Arr[minRowNumber][j];
    Arr[minRowNumber][j] = Arr[maxRowNumber][j];
    Arr[maxRowNumber][j] = temp;
}
document.write("Min: " + min + "<br>");
document.write("Max: " + max + "<br>");
document.write("Min row number: " + minRowNumber + "<br>");
document.write("Max row number: " + maxRowNumber + "<br>");
for (i = 0; i < Arr.length; i++) {
    for (j = 0; j < Arr[i].length; j++) {
        document.write(Arr[i][j] + ' ');
    }
    document.write("<br>");
}
// 2
document.write("# Лекция" + "<br>");
document.write("2)" + "<br>");
n = 10;
m = 10;
A = new Array(n);
for (i = 0; i <A.length; i++) {
    A[i] = new Array(m);
}
for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 90 + 10);
        document.write(A[i][j] + ' ');
    }
    document.write("<br>");
}
min = A[0][0];
for(i = 1; i < A.length; i +=2) {
    for(j = 0; j < A[i].length ; j++) {
        if (min > A[i][j]) {
            min = A[i][j];
        }
    }
}
document.write("Min is: " + min + "<br>");
// 3
document.write("3)" + "<br>");
n = 10;
m = 10;
A = new Array(n);
let sum = 0;
let averageValue;
for (i = 0; i < A.length; i++) {
    A[i]= new Array(m);
}
for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 90 + 10);
        sum += A[i][j];
        document.write(A[i][j] + " ");
    }
    document.write("<br>");
}
averageValue = sum / (n * m);
document.write("averageValue: " + averageValue + "<br>");
document.write("Элементы массива, которые сильно отклоняются от среднего значения:" + "<br>");
for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        if (((A[i][j] - averageValue) / averageValue) > 0.7 || ((A[i][j] - averageValue) / averageValue) < -0.7) {
            document.write(A[i][j] + " ");
        }
    }
}
document.write("<br>");
// 4
document.write("4)" + "<br>");
let count = 1;
A = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
let B = [];
for (i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1] ) {
        count++;
    }   else {
        B.push(count);
        count = 1;
    }
}
B.push(count);
document.write(B + "<br>");