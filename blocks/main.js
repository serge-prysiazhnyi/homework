window.onload = function(){
    function getRand(max){
            return Math.floor(Math.random() * max);
    }
    var blocks = document.querySelectorAll('.block');
    for(var i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('click', function(){
            var id = "data-id-" + this.dataset.id;
            if(!localStorage[id]){
                localStorage[id] = 1;
            }   else {
                localStorage[id]++;
            };
            if(localStorage[id] < 50){
                this.style.backgroundColor = 'rgb(' + getRand(255) + ',' + getRand(255) + ',' + getRand(255) + ')';
            }   else {
                this.style.backgroundColor = 'rgb(255,255,255)';
            }
        });
    };
    var shows = document.querySelectorAll('.show-btn');
    for(var i = 0; i < shows.length; i++){
        shows[i].addEventListener('click', function(){
            var id = "data-id-" + this.dataset.id;
            document.querySelector('span[data-id="'+ this.dataset.id +'"]').innerHTML = localStorage[id];
        })
    };
    var clearCounters = document.querySelector('.clear-counters-btn');
    clearCounters.addEventListener('click', function(){
        for(var i = 0; i < blocks.length; i++){
            localStorage["data-id-" + blocks[i].dataset.id] = 0;
        }
    });
    var setCounter = document.querySelector('.set-counter-btn');
    setCounter.addEventListener('click', function(){
        var id, value;
        id = +prompt('id = ?','');
        value = +prompt('value = ?','');
        localStorage["data-id-" + id] = value;
    });
};