let factorialSum = 0;
let factorialValue;
let a = +prompt('a = ?','');
let b = +prompt('b = ?','');
while (b < a) {
    alert('b должно быть больше a');
    b = +prompt('b = ?','');
}
let h = +prompt('h = ?','');
for (cycleNumber = a; cycleNumber <= b ; cycleNumber = cycleNumber + h) {
    factorialValue = 1;
    for (i = 1; i <= cycleNumber; i++) {
        factorialValue = factorialValue * i;
    }
    factorialSum = factorialSum + factorialValue;
}
console.log('Сумма факториалов =' + ' ' + factorialSum);