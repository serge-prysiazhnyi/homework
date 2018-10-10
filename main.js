// 1
console.log("#1");
function showArrayCentralElements(Arr) {
    var CentralElements = [];
    if (Arr.length % 2 == 0) {
        CentralElements.push(Arr[Arr.length / 2 - 1]);
        CentralElements.push(Arr[Arr.length / 2]);
    } else {
        CentralElements.push(Arr[Math.ceil((Arr.length - 1) / 2)]);
    }
    return CentralElements;
}
console.log(showArrayCentralElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(showArrayCentralElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 2
console.log("#2");
function doFunction(x, y, callback) {
    let counter = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            counter++;
        }
    }
    if (counter == 1) {
        console.log("counter: " + counter);
        return factorial(x);
    }
        return callback(x, y);
}
function power(x, y) {
    let res = x;
    for (var i = 1; i < y; i++) {
        res *=x;
    }
    return res;
}
console.log(doFunction(2, 3, power));
// 3
console.log("#3");
function sum(x, y) {
    return x + y;
}
function div(x, y) {
    return x / y;
}
function mul(x, y) {
    return x * y;
}
console.log(doFunction(16, -23, mul));
// 4
console.log("#4");
function factorial(x) {
    return (x != 1) ? x * factorial(x - 1) : 1;
}
console.log(doFunction(6, factorial));
// 5
console.log("#5");
var Some = Factory([[2, 7], [3, 9, 6], [4], [2, 2, 2], [1]]);
function Factory(list) {
    let counter = 0;
    return function() {// Some
        counter++
        let arrayNumber = counter;
        return function() {//struct function
            return list[arrayNumber];;
        }
    }
}
var struct_1 = Some(); 
var struct_2 = Some(); 
var struct_3 = Some(); 
console.log(struct_1());
console.log(struct_1());
console.log(struct_1());
console.log(struct_2());
console.log(struct_3());