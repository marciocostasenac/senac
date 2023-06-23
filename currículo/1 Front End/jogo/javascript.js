var jogador = "x";

function jogar (celula){
   
    //compara se a celula esta vazia para assim escrever

    if(celula.innerHTML ==""){
       
        //escreve no HTML a letra
       
        celula.innerHTML = jogador;

        //alterna variavel jogador para a próxima jogada
       
        if(jogador =="x"){
      
            jogador = "o";
            celula.style.backgroundColor = "red";
        }else{
            jogador = "x";
            celula.style.backgroundColor = "blue";
        
        }
        
    }
}    

function reiniciar(){
    window.location.reload();
}
//fulano = 0, cliclano = 1, deltrano = 2, beltrano = 3
const nomes = ['fulano','ciclano','deltrano','beltrano','jose','maria'];
    nomes.push('antonio');
function gerarBatalha(){
   //sorteia um nome da lista,"Math.random vai sortear os itens", "math.floor arredonda o numero da lista"
    const nome1 =nomes[Math.floor(Math.random()* nomes.length)];   
    const nome2 =nomes[Math.floor(Math.random()* nomes.length)];

    //enquanto nome1 = nome2,sorteia novamente
    while(nome1 === nome2){  
    gerarBatalha();

    }

    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
    } 

    
    