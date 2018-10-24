window.onload = function() {
    var value = 0;
    var commission = 0;
    function getValue(){
        value = +this.value;
        document.querySelector('#value').innerHTML = value;
        setValueBlockHeight(this.value);
        commission = calcCommission(value);
        this.setCommissionBlockHeight = setCommissionBlockHeight;
        this.setCommissionBlockHeight();
    }
    function setValueBlockHeight(value){
        valueBlock.style.height = (value * 2) + 'px';
    }
    function calcCommission(){
        if(value < 20) {
            return Math.round((value / 100) * 2);
        }
        if(value >= 20 && value < 50) {
            return Math.round((value / 100) * 4);
        }
        if(value >= 50 && value < 75){
            return Math.round((value / 100) * 6);
        }
        if(value >= 75 && value <= 100){
            return Math.round((value / 100) * 8);
        }
    }
    function setCommissionBlockHeight(){
        commissionBlock.style.height = (commission * 2) + 'px';
    }
    var range = document.querySelector('#rangeInput');
    var text = document.querySelector('#textInput');
    var valueBlock = document.querySelector('#value-block');
    var commissionBlock = document.querySelector('#commission-block');
    range.addEventListener('change', getValue);
    text.addEventListener('change', getValue);
    range.addEventListener('change', function(){
        text.value = value;
    });
    text.addEventListener('change', function(){
        range.value = value;
    });
}; 