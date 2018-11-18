window.onload = function() {
    console.log('# Лекция');
    var obj = {
        a: 10,
        b: 20,
        c: 30,
        d: "foo",
        e: "bar",
        f: {
            x: 5,
            y: 7
        }
    };
    function showObjKeys () {
        for (const key in this) {
            console.log(key);
        }
    }
    showObjKeys.call(obj);
    function sumObjKeys () {
        var res = 0;
        for (const key in this){
            if(typeof(this[key]) === "object"){
                res += sumObjKeys.call(this[key]);
            };
            if(typeof(this[key]) === "number"){
                res += this[key];
            }
        }
        return res;
    }
    console.log( sumObjKeys.call(obj) );
    console.log('# Практика');
    console.log('# 1');
    var characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
    ];
    function pluck(list, field){
        var res = [];
        for(var i = 0; i < list.length; i++){
            for(var key in list[i]){
                if(key === field){
                    res.push(list[i][key]);
                }
            }
        }
        return res;
    }
    console.log(pluck(characters, 'name'));
    console.log(pluck(characters, 'age'));
    console.log('# 2');
    var input = [1, 2, 3, 4, 5, 6];
    function isEven(x) { return x % 2 == 0; };
    function filter(list, someFunction){
        var res = [];
        for(var i = 0; i < list.length; i++){
            if(someFunction(list[i])){
                res.push(list[i]);
            };
        }
        return res;
    }
    console.log(filter(input, isEven));
    console.log('# 3');
    var someObject = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
        key5: {
            x: 10,
            y: 20,
            z: 30
        }
    };
    function count(){
        var counter = 0;
        function deep(){
            for (var key in this) {
                if(typeof(this[key]) === 'object'){
                    deep.call(this[key]);
                }
                if (this.hasOwnProperty(key)) {
                    counter++;
                }
            }
        };
        deep.call(this);
        return counter;
    }
    Object.prototype.count = count;
    console.log(someObject.count());
};