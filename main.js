window.onload = function() {
    this.setInterval(function(){
        var myTextArea = document.querySelector("#myTextArea");
        var inputs = document.querySelectorAll("input");
        var text = "";
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value) {
                if(i === inputs.length - 1) {
                    text += inputs[i].value;
                }   else {
                text += inputs[i].value + "," + " ";
                }
            }
        }
        myTextArea.value = text;
    },10);
};