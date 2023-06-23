function buscar(){
    var seletor = document.getElementById('moeda').value ;
    var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response => response.json())
    .then(data => {
        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

    }).catch(error => resultado.textContent=error); 
}

function formatar(valor){
    //mascara para formatar valor
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$"+valor;
   
    return valor;
}
function mudarImagem(selector){
    var moeda = document.getElementById('imagem')
    if(selector == "bitcoin"){
        moeda.innerHTML = '<img width="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKSk27An3e-OFyQ17hsuDgiZ4l8F_h2GFfjf-DaJY9w&s">'

    }else if (selector == "ethereum"){
    moeda.innerHTML = '<img width="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBC7MvIOuiWU0ma_kPR5fkglfYyqKdRLa4CV5kWdzzA&s">'
     
     }else if(selector == "litecoin"){
        moeda.innerHTML ='<img width= "200" src="https://media.istockphoto.com/id/921788716/pt/foto/bitcoin-litecoin-ethereum.jpg?s=1024x1024&w=is&k=20&c=nYF4nrZ5kWQ_mJFRtGY-5FcnABkLj1r_kPEQ_3BmIbI=">'

     }else if (selector == "dogecoin"){
        moeda.innerHTML = '<img width="200" src="https://einvestidor.estadao.com.br/wp-content/uploads/2021/06/dogecoin_160620213256.jpg">'
     }  
     }

