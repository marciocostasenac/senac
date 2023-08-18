//Sem Orientação a Objetos
var nome1 = 'Paula';
var nome2 = 'Juliana';
var nome3 = 'Alana';

var idade1 = 25;
var idade2 = 30;
var idade3 = 40;

function falar(nome, pessoa){
    alert('Sem Orientação a objetos: Olá sou '+ nome +'e tenho'+ idade +'anos');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);

//Com Orientação a Objetos
//Classe 
class Pessoa {                 //classe Pessoa
    constructor(nome,idade){   // construtor , quem construi o objeto,onde você passa os parametros(dados)
        this.nome = nome; //atributo
        this.idade = idade; //atributo
    }
    falar(){                 //método para falar
        alert("Pessoa criada :Olá meu nome é "+this.nome+" e tenho "+ this.idade + " anos")
    }
}
// Instanciando Objeto - criar objeto
var pessoa1 = new Pessoa('Astolfo',71);   //objeto pessoal1
var pessoa2 = new Pessoa('Malvina',50);   //objeto pessoal2
var pessoa3 = new Pessoa('Muriel', 60);   //objeto pessoal3

pessoa1.falar();
pessoa2.falar();
alert('Olá '+ pessoa3.nome);

//Herança e Polimorfismo
//criando classe Pai
class Animal {
    constructor(nome){
        this.nome = nome;
    }
    fazerBarulho(){
        alert("Fazendo barulho genérico");
    }
       
}
 
// criando classes filhos de animal

class Cachorro extends Animal {
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    fazerBarulho(){
        alert("Cachorro Latindo!")
    }
}
class Gato extends Animal {
    constructor(nome, cor){
        super(nome);
        this.cor = cor

    }
    fazerBarulho(){
        alert("Gato Miando!");
    }
}

var objetoCachorro = new Cachorro('Fred', 'Schnauzer')
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();

var objetoGato = new Gato ('Sininho','cinza');
objetoGato.nome = "Garfield";  // alterando atributos publicos
objetoGato.cor = "Laranja";    // alterando atributos publicos
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho();  //miando 

//Encapsulamento modificador de acesso
class contaBancaria{
    constructor(saldo){
        this._saldo = saldo;  // "_" significa privado
    }
    get obtersaldo(){
        return this._saldo;
    }
    depositar(valor){
        this._saldo+= this._valor + valor;
    }
    sacar(valor){
        if(valor<= this._saldo){
            this._saldo =this._saldo - valor;
        }else{
            alert("Valor maior que o saldo!")
        }
    }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(10000);
alert(minhaConta.obterSaldo);
