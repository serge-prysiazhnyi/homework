window.onload = function() {
    function dispalyOn(){
        for(var i = 0; i < this.childNodes.length; i++) {
            this.childNodes[i].style.display = 'block';
        }
    }
    function dispalyOff(){
        for(var i = 0; i < this.childNodes.length; i++) {
            this.childNodes[i].style.display = 'none';
        }
    }
    var data = document.createElement('div');
    document.body.insertBefore(data, document.body.firstChild);
    data.dataset.name = 'menu';
    data.dataset.type = 'row';
    // data.dataset.type = 'column';
    data.getAttribute('data-type') == 'row' ? data.classList.add('flex'): null;
    var title1 = document.createElement('div');
    title1.dataset.title = 'title 1';
    title1.dataset.handler = 'ActionAdd';
    title1.classList.add('block');
    data.appendChild(title1);
    var title2 = document.createElement('div');
    title2.dataset.title = 'title 2';
    title2.dataset.handler = 'ActionSaveAs';
    title2.classList.add('block');
    data.appendChild(title2);
    var inner1 = document.createElement('div');
    inner1.dataset.title = 'inner 1';
    inner1.classList.add('block');
    inner1.classList.add('inner');
    title2.appendChild(inner1);
    inner1.style.display = 'none';
    var inner2 = document.createElement('div');
    inner2.dataset.title = 'inner 2';
    inner2.classList.add('block');
    inner2.classList.add('inner');
    title2.appendChild(inner2);
    inner2.style.display = 'none';
    if(data.dataset.type === 'row') {
        inner1.style.bottom = (0 - inner1.parentElement.offsetHeight) + "px";
        inner1.style.left = '-1px';
        inner2.style.bottom = (0 - inner2.parentElement.offsetHeight) * 2 + "px";
        inner2.style.left = '-1px';
    }
    if(data.dataset.type === 'column'){
        inner1.style.right = (0 - inner1.parentElement.offsetWidth) + "px";
        inner1.style.top = '-1px';
        inner2.style.right = (0 - inner2.parentElement.offsetWidth) * 2 + "px";
        inner2.style.top = '-1px';
    }
    title2.addEventListener('mouseover', dispalyOn);
    title2.addEventListener('mouseout', dispalyOff);
    var title3 = document.createElement('div');
    title3.dataset.title = 'title 3';
    title3.dataset.handler = 'ActionExit';
    title3.classList.add('block');
    data.appendChild(title3);
}; 