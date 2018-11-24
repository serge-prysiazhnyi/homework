window.onload = function() {
    var cinemas = document.querySelectorAll('.cinema__item');
    var struct = [];
    cinemas.forEach(function(item){
        struct.push({
            name: item.children[0].innerHTML,
            price: item.children[1].innerHTML
        });
    })
    console.log(struct);
    struct
    .filter(function(item){
        return item.name;
    })
    .forEach(function(item){
        console.log(item.name);
    });
    var sum = struct
    .filter(function(item){
        return item.price;
    })
    .map(function(item){
        return parseInt(item.price);
    })
    .reduce(function(sum, current){
        return sum + current;
    })
    console.log(sum);
};