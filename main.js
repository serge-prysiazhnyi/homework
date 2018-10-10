// 1
console.log("#1");
function doFunction(x, y, callback) {
    this.result = callback(x, y);
    return this;
};
function clear() {
    this.result = 0;
    return this;
};
function copy(value) {
    this["buffer"] = value;
    return this;
};
function sum(a, b) {
    return a + b;
};
var obj = {
    copy: copy,
    clear: clear,
    doFunction: doFunction
};
console.log(obj.doFunction(2, 3, sum).clear().copy(123));
// 2
console.log("#2");
var str = "&#39;var_text_hello&#39;";
str = str.slice(0,5) + str.slice(5,8) + str.slice(9,10).toLocaleUpperCase()
 + str.slice(10,13) + str.slice(14,15).toLocaleUpperCase() + str.slice(15,24);
console.log(str);
// 3
console.log("#3");
function inArray(text, Arr) {
    for(var i = 0; i < Arr.length; i++) {
        if(Arr[i].indexOf(text) !== -1) {
            return true;
        }
    }
    return false;
}
console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));
// 4
console.log("#4");
function addRecord(flag) {
    var flag = arguments[length - 1] || false;
    if(arguments.length === 0) {
      return this;
    }
    for(i=0;i<arguments.length;i++) {
      if(typeof arguments[i] != "object") {
        continue;
      } else {
        if(flag === false || !this[key]) {
          for(key in arguments[i]) {
            this[key] = arguments[i][key];
          }
        }
      }
    }
    return this;
}
var data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
};
console.log( data.addRecord({x: 10},{y: 20}, {z:30}, {p: 50}) );