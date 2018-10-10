// Rectangle
let rows = 10;
let columns = 5;
let symbol = '*';
let separator = '&nbsp;';
let i = 0;
let j = 0;

fullLine = '';
for(i = 1; i <= rows; i++){
    fullLine += symbol;
}

spaceLine = '';
for(i = 1; i <= rows; i++){
    if (i == 1 || i == rows){
        spaceLine += symbol;
    } else {
        spaceLine += separator;
    }
}

document.write(fullLine + '<br />');
for (i = 1; i <= columns - 2; i++) {
    document.write(spaceLine + '<br />');
}
document.write(fullLine + '<br />');
// Breaker
document.write('<br />');
// Right triagle
rows = 10; 
symbol = '*';
separator = '&nbsp;';
i = 0;
j = 0;

fullLine = '';
for(i = 1; i <= rows; i++){
    fullLine += symbol;
}

spaceLine = '';
for (i = 1; i < rows; i++){
    for (j = 1; j <= i ; j++){
        if (j == 1 || j == i) {
            document.write(symbol);
        }   else {
            document.write(separator);
        }
    }
    document.write('<br/>');
}

for (i = 1; i <= columns - 3; i++) {
    document.write(spaceLine);
}
document.write(fullLine + '<br />');
// Breaker
document.write('<br />');
// Equilateral triangle
rows = 5;
i = 0;
j = 0;
while (i < rows) {
    symbol = '';
    separator = '';
    for (j = 0; j < rows - 1 - i; j++) {
        separator += '&nbsp;';
    }
    if ( i < rows - 1) {
        for (j = 0; j < 2 * i + 1; j++) {
            if (j == 0 || j == 2 * i) {
                symbol += '*';
            }   else {
                symbol += '&nbsp;';
            }
        }
    }   else {
        for (j = 0; j < 2 * i + 1; j++) {
            symbol += '*';
        }
    }
    i++
    document.write(separator + symbol + "<br />");
}
// Breaker
document.write('<br />');
// Rhombus
rows = 10;
i = 0;
j = 0;
for(i = 0; i <= rows / 2; i++){
    symbol = '';
    separator = '';
    for(j = rows / 2 - i; j > 0; j--){
        separator +='&nbsp;';
    }
    for(j = 0; j < i * 2 - 1; j++){
        if (j == 0 || j == i * 2 - 2) {
            symbol +='*';
        }   else {
            symbol +='&nbsp;';
        }
    }
    document.write(separator + symbol + "<br />");
}
for (i = 2; i <= rows / 2; i++){
    symbol = '';
    separator = '';
    for (j = 0; j < i - 1; j++){
        separator +='&nbsp;';
    }
    for (j = (rows / 2 - i) * 2 + 1; j > 0; j--){
        if (j == (rows / 2 - i) * 2 + 1 || j == 1) {
            symbol +='*';
        }   else {
            symbol +='&nbsp;';
        }
    }
    document.write(separator + symbol + "<br />");
}