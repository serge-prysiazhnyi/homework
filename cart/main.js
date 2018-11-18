window.onload = function(){
    var cart = document.querySelector('.cart');
    var addButtons = document.querySelectorAll('.add-to-cart');
    for(var i = 0; i < addButtons.length; i++){
        addButtons[i].addEventListener('click', function(){
            var id = "item_" + this.dataset.id;
            !localStorage[id] ? localStorage[id] = 1: localStorage[id]++;
            var cartCounter = document.createElement('span');
            if(localStorage[id] == 1){
                var item = document.querySelector('h6[data-id='+this.dataset.id+']').cloneNode(true);
                cart.appendChild(item); 
                cartCounter.innerHTML = localStorage[id];
                cartCounter.dataset.id = this.dataset.id;
                cart.appendChild(cartCounter);
            }   else {
                console.log();
                document.querySelector('span[data-id='+this.dataset.id+']').innerHTML = localStorage[id];
            }
        });
    };
    var removeButtons = document.querySelectorAll('.remove-item-btn');
    for(var i = 0; i < removeButtons.length; i++){
        removeButtons[i].addEventListener('click', function(){
            var id = "item_" + this.dataset.id;
            if(localStorage[id]){
                localStorage.removeItem(id);
                var item = cart.querySelector('h6[data-id='+this.dataset.id+']');
                cart.removeChild(item);
                var counter = cart.querySelector('span[data-id='+this.dataset.id+']');
                cart.removeChild(counter);
            }
        });
    };
    var removeAll = document.querySelector('.remove-all-btn');
    removeAll.addEventListener('click', function(){
        for(var i = 0; i < addButtons.length; i++){
            var id = "item_" + addButtons[i].dataset.id;
            if(localStorage[id]){
                localStorage.removeItem(id);
            }
            while (cart.firstChild) {
                cart.removeChild(cart.firstChild);
            }
        }; 
    });
};