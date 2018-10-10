let reverseNumber = 0;
let number = prompt('Number = ?','');
parseInt(number);
while (number > 0) {
    reverseNumber = reverseNumber * 10 + number % 10;
    number = Math.floor(number / 10);
}
document.write(reverseNumber);