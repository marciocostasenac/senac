$(window).scroll( function(){ 

    var posicao = $(this).scrollTop();
    $(".aviao").css({
        'right': posicao / 4 + '%'
    });

} );

//quando estiver digitando,já vai fazendo a busca
document.getElementById("busca").addEventListener("keyup",function(){


    alert("test");


    var entrada = this.IDBCursorWithValue.tolowerCase();
    var cartões = document.getElementsByclassName("card");

    for (var i=0; i < cartoes.length; i++){
        var nome = cartoes[i].gettAtribute("data-name").tolowerCase();
        
        alert(nome+" "+ nome.indexOf(entrada));


        if(nome.indexOf(entrada) > -1){
            cartões[i].style.display= "";
        
        }else{
            cartoes[i].style.display = "none";
        }

    }
});