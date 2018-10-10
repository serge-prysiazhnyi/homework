let a = 1;
let b = 100;
document.write();
document.write('<table>');
for (i = a; i <= b; i++) {
    if (i % 2 == 0) {
        document.write('<tr>');
        document.write('<td>');
        document.write(i);
        document.write('</td>');
        document.write('</tr>');
    }
}
document.write('</table>');