let max = 0;
let number = prompt('Number = ?','');
parseInt(number);
while (number > 0) {
    x = number % 10;
    number = Math.floor(number / 10);
    if (x > max) {
        max = x;
    }
}
document.write(max);