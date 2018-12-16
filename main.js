// # Практика
let obj = {
  list1: [1, 3, 6, 34, 87, 34, 45, [1, 2]],
  list2: [2, 7, 4, 76, 13, 45, 34],
  getCollision: function(){
    let res = [];
    for (let i = 0; i < this.list1.length; i++){
      if(this.list2.indexOf(this.list1[i]) > 0){
        res.push(this.list1[i]);
      }
    }
    return res;
  },
  render: function foo(){
    let table = document.createElement('table');
    for(key in this){
      let row = document.createElement('tr');
      this[key].forEach(function(item){
        if(typeof item == "object"){
          item.forEach(function(item){
            let cell = document.createElement('td');
            cell.innerHTML = item;
            row.appendChild(cell);
          });
        };
        let cell = document.createElement('td');
        cell.innerHTML = item;
        row.appendChild(cell);
      })
      table.appendChild(row);
    }
    document.body.appendChild(table);
  }
}
Object.defineProperty(obj, 'getCollision', {
    enumerable: false
});
Object.defineProperty(obj, 'render', {
  enumerable: false
});
// # Лекция
let data = {
  str: '',
  counter: 0,
}
Object.defineProperty(data, "model", {
  value: function(value){
    if(this.counter % 2 == 0){
      this.str = value;
      this.counter++;
      return this.str;
    }
    else{
      this.str = this.str.split(value);
      let symbolCount = this.str.splice(value);
      this.counter++;
      return `symbol: ${value} ; count: ${symbolCount.length - 1}`;
    }
  }
});
// 2
let obj2 = {
  x: 10,
  y: 20,
  p: 15,
};
Object.defineProperty(obj2, 'model', {
  value: function(obj){
    for(key in obj){
      if(this[key]){
        switch (obj[key].operation) {
          case '+':
          this[key] += obj[key].value;
          break;
          case '-':
          this[key] -= obj[key].value;
          break;
          case '*':
          this[key] *= obj[key].value;
          break;
          case '/':
          this[key] /= obj[key].value;
          break;
          case '%':
          this[key] %= obj[key].value;
          break;
        }
      }
      else{
        this[key] = obj[key].value;
      }
    }
  }
});
let update = { 
  x: { value: 33, operation: '*' }, 
  z: { value: 75, operation: '+' },
  p: { value: 4, operation: '%' }
};
obj2.model(update);
console.log(obj2);