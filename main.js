document.write("# Лекция" + "<br>");
function getRand(min, max) {//декларация функции, которая создает случайные числа в заданом диапазоне
    return Math.floor(min + Math.random() * (max + 1 - min))// генерация случайного числа
}
function SuperArray(n, m, options) {//декларация функции, которая создает экземпляр класса SuperArray
    var Arr = new Array(n);//создание массива размерностью n
    for(var i = 0; i < n; i++) {//перебор элементов массива (рядов)
        Arr[i] = new Array(m);//присвоение i-итой ячейке пустой массив размерностью m
        for(var j = 0; j < m; j++) {//перебор элементов массива (колонок)
            Arr[i][j] = getRand(options.min, options.max);//присвоение каждому элементу двумерного массива случайного числа используя функцию getRand
        }
    }
    this.Arr = Arr;//создание свойства Arr у нового экземпляра класса SuperArray и присвоение ему значения в виде двумерного массива
}
SuperArray.prototype.render = function(separator) {//создание метода render у прототипа SuperArray
    for(var i = 0; i < this.Arr.length; i++) {//перебор рядов массива
        for(var j = 0; j < this.Arr[i].length; j++) {//перебор колонок массива
            document.write(this.Arr[i][j]);//вывод элемента из i-того ряда и j-той колонки
        }
        document.write("<br>");//вывод разделителя 
    }
    document.write(separator);//вывод сепаратора
}
SuperArray.prototype.clear = function(direction, k) {//создание метода clear
    if(direction == "row") {//если направление ряд
        for(var j = 0; j < this.Arr[k].length; j++) {//найти все элементы к-того ряда
            this.Arr[k][j] = "00";//и присвоить каждому строку "00"
        }
    }
    if(direction == "column") {//если направление колонка
        for(var i = 0; i < this.Arr.length; i++) {//найти все элементы к-той колонки
            this.Arr[i][k] = "00";//и присвоить каждому строку "00"
        }
    }
}
SuperArray.prototype.setMarker = function(position) {//создание метода setMarker
    while(position.x > this.Arr.length){// если свойство х больше длинны ряда масива
        position.x -= this.Arr.length;// отнять от х длинну ряда
    }
    while(position.y > this.Arr[0].length){// если свойство у больше длинны ряда масива
        position.y -= this.Arr[0].length;// отнять от у длинну ряда
    }
    this.posX = position.x;// присвоить this.posX значение х
    this.posY = position.y;// присвоить this.posY значение х
    this.Arr[this.posX][this.posY] = "&&";// присвоить элементы масива в ряде this.posX и колонке this.posY строку "&&"
}
SuperArray.prototype.goTo = function(move) {//создание метода goTo
    this.Arr[this.posX][this.posY] = "00";// присвоить начальному положению маркера мтроку "00"
    this.posX += move.x;// прибавить к положению маркера по ряду двумерного массива значение х параметра move
    this.posY += move.y;// прибавить к положению маркера по колонке значение у
    while(this.posX > this.Arr.length){// если свойство posX больше длинны ряда масива
        this.posX -= this.Arr.length;// отнять от posX длинну ряда
    }
    while(this.posY > this.Arr[0].length){// если свойство posY больше длинны ряда масива
        this.posY -= this.Arr[0].length;// отнять от у длинну ряда
    }
    this.Arr[this.posX][this.posY] = "&&";//присвоить элементы масива в ряде this.posX и колонке this.posY строку "&&"
}
SuperArray.prototype.shift = function(direction) {//создание метода shift
    this.Arr[this.posX][this.posY] = "00";//присвоить начальному положению маркера мтроку "00"
    switch(direction) {//условная конструкция switch с параметром direction
        case "left"://в случае значения "left"
        this.posY--;//уменишь posY на 1
        break;//завершить выполнение switch(direction)
        case "right"://в случае значения "right"
        this.posY++;//увеличить posY на 1
        break;//завершить выполнение switch(direction)
        case "top"://в случае значения "top"
        this.posX--;//уменишь posХ на 1
        break;//завершить выполнение switch(direction)
        case "bottom"://в случае значения "bottom"
        this.posX++;//увеличить posХ на 1
        break;//завершить выполнение switch(direction)
    }
    while(this.posX > this.Arr.length){// если свойство posX больше длинны ряда масива
        this.posX -= this.Arr.length;// отнять от posX длинну ряда
    }
    while(this.posY > this.Arr[0].length){// если свойство posY больше длинны ряда масива
        this.posY -= this.Arr[0].length;// отнять от у длинну ряда
    }
    this.Arr[this.posX][this.posY] = "&&";//присвоить элементы масива в ряде this.posX и колонке this.posY строку "&&"
}
let myArray = new SuperArray(8, 10, { min: 10, max: 55 }); // создание myArray, экземпляра класса SuperArray
myArray.clear("row", 1);//вызов метода clear в контексте myArray, экземпляра класса SuperArray
myArray.setMarker({ x: 1, y: 1 });//вызов метода setMarker
myArray.goTo({ x: 1, y: 2  });//вызов метода goTo
myArray.shift("right");// вызов метода shift
myArray.render("************");//вызов метода render

document.write("<br>" + "# Практика");
function Field(width, height) {
    this.width = width,
    this.height = height
};
function Person(name, XPosition, YPosition) {
    this.name = name,
    this.XPosition = XPosition,
    this.startXPosition = XPosition,
    this.YPosition = YPosition,
    this.startYPosition = YPosition
};
Field.prototype.renderField = function() {
    document.write("<hr>")
    var fieldArr = new Array(this.width)
    for(var i = 0; i < this.width; i++) {
        fieldArr[i] = new Array(this.height)
        for(var j = 0; j < this.height; j++) {
            fieldArr[i][j] = 0;
            document.write(fieldArr[i][j]);
        }
        document.write("<br>")
    }
    this.fieldArr = fieldArr;
    document.write("<hr>")
};
Field.prototype.clearField = function() {
    for(var i = 0; i < this.width; i++) {
        for(var j = 0; j < this.height; j++){
            if(this.fieldArr[i][j] === 1) {
                this.fieldArr[i][j] = 0;
            }
        }
    }
};
Field.prototype.changeSize = function(newX, newY) {
    for(var i = 0; i < newX; i++) {
        this.fieldArr[i] = [];
        for(var j = this.fieldArr[i].length; j < newY; j++) {
            this.fieldArr[i][j] = 0;
        }
    }
};
Person.prototype.start = function() {
    this.renderSymbol(this.XPosition, this.YPosition, "1");
};
Person.prototype.go = function(direction, step) {
    this.renderSymbol(this.XPosition, this.YPosition, "0");
    switch(direction) {
        case 'top':
        this.XPosition -= step;
        break;
        case 'bottom':
        this.XPosition += step;
        break;
        case 'right':
        this.YPosition += step;
        break;
        case 'left':
        this.YPosition -= step;
        break;
    }
    while(this.XPosition > this.fieldArr.length - 1){
        this.XPosition -= this.fieldArr.length;
    }
    while(this.YPosition > this.fieldArr[0].length -1){
        this.YPosition -= this.fieldArr[0].length;
    }
    if(this.XPosition < 0) {
        this.XPosition = this.fieldArr.length + this.XPosition;
    }
    if(this.YPosition < 0) {
        this.YPosition = this.fieldArr[0].length + this.YPosition;
    }
    this.renderSymbol(this.XPosition, this.YPosition, "1");
};
Person.prototype.resetPosition = function() {
    this.renderSymbol(this.XPosition, this.YPosition, "0");
    this.renderSymbol(this.startXPosition, this.startYPosition, "1");
};
Person.prototype.renderSymbol = function(x, y, symbolSign) {
    this.fieldArr[x][y] = +symbolSign;
}

var field = new Field(10, 10);
var person = new Person("john", 2, 3);
field.renderField();
field.clearField();
field.changeSize(20,20);
person.fieldArr = field.fieldArr;
person.start();
person.go('right', 10);
person.go('top', 2);
person.go('right', 7);
person.go('left', 4); 
person.resetPosition();
console.log(person.fieldArr);