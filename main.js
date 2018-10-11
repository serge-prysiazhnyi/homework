function SuperMath() {
     
}
SuperMath.prototype.check = function (obj) {
    while (!confirm("" + obj.x + " " + obj.znak + " " + obj.y)) {
        obj.x = +prompt("x = ?","");
        obj.znak = prompt("znak = ?","");
        if(obj.znak !== "+" && obj.znak !== "-" && obj.znak !== "*" && obj.znak !== "/"){return alert('Error!')};
        obj.y = +prompt("y = ?","");
    }
    let res = null;
    switch(obj.znak) {
        case '+':
        res = obj.x + obj.y;
        break;
        case '-':
        res = obj.x - obj.y;
        break;
        case '*':
        res = obj.x * obj.y;
        break;
        case '/':
        res = obj.x / obj.y;
        break;
    }
    return res;
}
p = new SuperMath();
myObj = { x:12, y:3, znak:"/"};
console.log(p.check(myObj));