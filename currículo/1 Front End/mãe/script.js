var frase = "mãe você é e sempre será a melhor parte .Nunca vou te esquecer!Feliz dia das mães";
function gerarFrase(){
   var texto = document.getElementById("frase");
   texto.innerHTML  = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance (frase);
    som.speak(discurso);
}