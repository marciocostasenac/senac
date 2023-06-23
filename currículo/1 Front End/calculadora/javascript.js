var num1;
var num2;
var total;
function converterParaNumero(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}


function soma() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //convert de texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    //pega a div o resultado num1+num2
    var total = document.getElementById("resultado");
    //escreve nessa div o resultado num1+num2
    total.innerHTML = num1 + num2;
}
function subtrair() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //convert de texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    //pega a div o resultado num1+num2
    var total = document.getElementById("resultado");
    //escreve nessa div o resultado num1+num2
    total.innerHTML = num1 - num2;
}


function multiplicar() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //convert de texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;
}

function dividir(){
 //pega os campos de input da tela
 var num1 = document.getElementById("n1").value;
 var num2 = document.getElementById("n2").value;

 //convert de texto para números
 num1 = parseInt(num1);
 num2 = parseInt(num2);
 var total = document.getElementById("resultado");
 total.innerHTML = num1 / num2;   
}