x = Math.floor(Math.random() * 20 ) ;
y = +prompt('Введите число','');
switch (Math.abs(x - y)) {
    case (0):
    document.write("верно");
    break;
    case (1 || 2):
    document.write("несите мне азот");
    break;
    case (3 || 4):
    document.write("тепло");
    break;
    default:
    document.write("холодно");
}