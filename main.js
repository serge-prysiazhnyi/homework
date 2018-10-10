// # Практика
console.log("# Практика");
// 1
console.log("#1");
function inArray(textItem, Arr) {
    for(i = 0; i < Arr.length; i++) {
        if (Arr[i] == textItem) {
            return true;
        } 
    }
    return false;
}
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));
// # Лекция
console.log("# Лекция");
// 1
console.log("#1");
obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}
function convert(obj) {
    for(key in obj) {
        if(typeof obj[key] == "object") {
            for (keyInner in obj[key]) {
                obj[keyInner] = obj[key][keyInner];
            }
            delete obj[key];
        }
    }
    return obj;
}
console.log(convert(obj));
// 2
console.log("#2");
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myPop() {
    let res = this[this.length - 1];
    this.length--;
    return res;
}
list.myPop = myPop;
console.log(list.myPop());

function myPush(item) {
    this[this.length] = item;
    return this.length;
}
list.myPush = myPush;
console.log(list.myPush(9));

function mySplice() {
    if(arguments.length < 2) {
        return;
    }
    var pos = arguments[0],
        count = arguments[1],
        res = []
        insertArr = [];
    for(var i = 1; i <= count; i++) {
        res[res.length] = this[pos + i -1];
    }
    for(var i = pos + count, j = 0; i < this.length; i++, j++) {
        this[pos + j] = this[i];
    }
    for(var i = 2; i < arguments.length; i++) {
        insertArr[insertArr.length] = arguments[i];
    }
    for(var i = insertArr.length - 1; i >= 0 ; i--) {
        var item = insertArr[i];
        this.length++;
        for (var j = this.length - 1; j > pos; j-- ) {
            this[j] = this[j - 1];
        }
        this[pos] = item;
    }
    this.length -= count;
    return res;
}
list = [2,3,42,4,25,213,1,2];
list.mySplice = mySplice;
console.log(list.mySplice(2, 4,'first', 'second', 'third'));
console.log(list);

// 3
console.log("#3");
function assignObjects(obj1, obj2) {
    for(key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1
}
console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
// # Практика
// 2&3
console.log("#2&3");
function newAssignObjects(obj1, obj2, flag = false) {
    for (var key in obj2) {
        if (!obj1.hasOwnProperty(key) || flag === false) {
            obj1[key] = obj2[key];
        }
    }
    return obj1
}
console.log(newAssignObjects({ x: 10, y: 20 }, { z: 30 }, true));
console.log(newAssignObjects({ x: 10 }, { x: 20, y: 30 }, true));