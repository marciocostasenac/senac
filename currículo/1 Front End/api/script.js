function buscar() {
    var cep = document. getElementById('cep').value;
    var url ='https://viacep.com.br/ws/'+cep+'/json/';

    fetch (url)
    .then(response =>response.json())
    .then(data =>{
        alert('funcionou');

        if(data.erro){
            document.getElementById('resultado').textContent = 'CEP não encontrado!';
        }else{
            document.getElementById('resultado').innerHTML =
            '<strong> cidade CEP: </strong>'  + data.localidade +' <br>'
            +'<strong> Cep: </strong>' + data.localidade +'<br>'
            +'<strong> Cep: </strong>' + data.cep + '<br>'
            +'<strong> logradouro: </strong>' + data.logradouro +'<br>'
            +'<strong> Bairro: </strong>'+ data.bairro + '</br>'
            +'<strong> Complemento: </strong>' + data.complemento + '</br>'
            +'<strong> Estado:</strong>'+ data.uf + '</br>'
            +'<strong> Código IBGE: </strong>' + data.ibge + '</br>';
        }
        

    }).catch(error=> alert('deu errado:'+error));
}