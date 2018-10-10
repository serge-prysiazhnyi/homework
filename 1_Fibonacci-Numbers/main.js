let n = +prompt('Количество чисел Фибоначчи','');
while (isNaN(n)) {
    alert('Erorr!');
    n = +prompt('Количество чисел Фибоначчи','');
}
let a = 0;
let b = 1;
for (i = 1; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
} 