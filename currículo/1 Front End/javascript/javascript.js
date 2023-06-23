alert('Olá Mundo');
// alert ('olá Mundo');

var numero = 5;

if(numero >10){
    alert ('numero maior que 10');
} else {
    alert('numero menor que 10');
}

var contador = 0;
//enquanto contador for menor que 5 executa
while(contador < 5){
    alert('numero:' + contador);
    contador=contador +1; 

}

//criação de lista - Fulano 0, Ciclano 1, Deltrano 2
var nomes = ['Fulano', 'Ciclano', 'Deltrano'];
//alert(nomes[0]);
//nomes.lenght = 3
for(contador=0; contador < nomes.length; contador++){
    alert(nomes [contador]);

    if(nomes[contador] === 'ciclano'){
        alert('Pessoa Encontrada!') 
    }
    }

//função
function baixarEstoque(){
    alert("estoque abaixando");

}
function movimentarCaixa(){
    alert("movimentado caixa");
}

function fazerVenda(){
    baixarEstoque();
    movimentarCaixa();
    
    //Dom -
    var titulo = document.getElementById('texto');
    titulo.innerHTML = 'novo texto';
}
//objeto
var pessoa = { idade: 10, nome: 'Ricardo',altura:1.50};
alert(pessoa.altura);



