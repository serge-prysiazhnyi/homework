window.onload = function() {
    var step = 100;
    var h = 200;
    var hero = document.createElement('div');
    var heroInitialHeight;
    var heroInitialWidth;
    var fired = false;
    hero.classList.add('hero');
    document.body.appendChild(hero);
    var heroComputedStyle = getComputedStyle(hero);
    hero.style.top = "400px";
    hero.style.left = "400px";
    document.addEventListener('keydown', function(event){
        switch(event.keyCode){
            case 32:
            if(event.ctrlKey){
                return false
            };
            hero.style.top = ( parseInt(hero.style.top) - h ) +'px';
            setTimeout(function(){
                hero.style.top = ( parseInt(hero.style.top) + h ) +'px';
            },1000);
            break;
            case 39:
            hero.style.left = ( parseInt(hero.style.left) + step ) +'px';
            if(parseInt(hero.style.left) > window.innerWidth - parseInt(heroComputedStyle.width)){
                hero.style.left = (window.innerWidth - parseInt(heroComputedStyle.width)) + 'px';
            }
            break;
            case 37:
            hero.style.left = ( parseInt(hero.style.left) - step ) +'px';
            if(parseInt(hero.style.left) < 0){
                hero.style.left = 0;
            }
            break;
            case 38:
            if(event.ctrlKey){
                return false
            };
            hero.style.top = ( parseInt(hero.style.top) - step ) +'px';
            if(parseInt(hero.style.top) < 0){
                hero.style.top = 0;
            }
            break;
            case 40:
            if(event.ctrlKey){
                return false
            };
            hero.style.top = ( parseInt(hero.style.top) + step ) +'px';
            if(parseInt(hero.style.top) > window.innerHeight - parseInt(heroComputedStyle.height)){
                hero.style.top = (window.innerHeight - parseInt(heroComputedStyle.height)) + 'px';
            }
            break;
            case 17:
            if(!fired) {
                fired = true;
                heroInitialHeight = hero.style.height;
                heroInitialWidth = hero.style.width;
                hero.style.height = (hero.offsetHeight / 100 * 40) + 'px';
                hero.style.width = (hero.offsetWidth / 100 * 115) + 'px';
            }
        }
    });
    document.addEventListener('keyup', function(event){
        switch(event.keyCode){
            case 17:
            hero.style.height = heroInitialHeight;
            hero.style.width = heroInitialWidth;
            fired = false;
        }
    });
};