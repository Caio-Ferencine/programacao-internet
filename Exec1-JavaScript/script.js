//Faça uma página que tenha dois campos
//e um botão, ao clicar no botão exiba
//o resultado da soma dos dois números informados;

let campo1 = document.querySelector("#campo1");
let btsoma = document.querySelector("#btsoma");
let campo2 = document.querySelector("#campo2");
let resultado = document.querySelector("#resultado");

function somarvalores(){
    let valor1 = Number(campo1.value);
    let valor2 = Number(campo2.value);
    resultado.textContent = (valor1 + valor2); 
}
btsoma.onclick = function(){
    somarvalores();
}

//Faça uma página que receba um valor que é o valor pago,
//um segundo valor que é o preço do produto e
//retorne o troco ser dado



let valorpago = document.querySelector("#valorpago");
let preco = document.querySelector("#preco");
let btdetroco = document.querySelector("#btdetroco");
let troco = document.querySelector("#troco");

function resultadodotroco(){
    let valordoproduto = Number(valorpago.value);
    let precodoproduto = Number(preco.value);
    troco.textContent = (valordoproduto - precodoproduto);
}

btdetroco.onclick = function(){
    resultadodotroco();
}

//Faça um programa que receba o valor do quilo
//de um produto e a quantidade de quilos do produto
//consumida calculando o valor final a se pago

let valorquilo = document.querySelector("#valorquilo");
let quantidadequilo = document.querySelector("#quantidadequilo");
let btvalorfinal = document.querySelector("#btvalorfinal");
let totalpago = document.querySelector("#totalpago");

function calculaquilo(){
    let valor = Number(valorquilo.value);
    let quantidade = Number(quantidadequilo.value);
    totalpago.textContent = (valor * quantidade);
}

btvalorfinal.onclick = function(){
    calculaquilo();
}

//Faça um programa informar um saldo e 
//imprimir o saldo com reajuste de 1%

let saldo = document.querySelector("#saldo");
let reajuste = document.querySelector("#btreajuste");
let saldodoreajuste = document.querySelector("#saldodoreajuste");

function calculareajuste(){
    let saldo1 = Number(saldo.value);
    saldodoreajuste.textContent= (saldo1/100 + saldo1);
}

btreajuste.onclick = function(){
    calculareajuste();
}

//Faça um programa que receba 3 Números e imprima o seguinte:
//a)média aritmética dos números:

let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let btcalcula = document.querySelector("#btcalcula");
let resultadodasoma = document.querySelector("#resultadodasoma");

function calculamedia(){
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let valor3 = Number(numero3.value);
    resultadodasoma.textContent = ((valor1 + valor2 + valor3) /3);
}

btcalcula.onclick = function(){
    calculamedia();
}

//b)média ponderada dos números, respectivamente com os pesos: (3,2 e 5);

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let peso1
let peso2
let peso3
let botaocalcula = document.querySelector("#botaocalcula");
let resultadofinal = document.querySelector("#resultadofinal");

function calculapoderada(){
    let valorum = Number(valor1.value);
    let valordois = Number(valor2.value);
    let valortres = Number(valor3.value);
    let peso1 = 3
    let peso2 = 2
    let peso3 = 5

    somaPesos = peso1 + peso2+ peso3;
    resultadofinal.textContent = (valorum * peso1 + valordois * peso2 + valortres * peso3) / (peso1 + peso2 + peso3);
    
}

botaocalcula.onclick = function(){
    calculapoderada();
}

//c)A soma das duas médias;

function somadasmedias(){
    let = resultado1 = Number (resultadofinal.textContent);
    let = resultado2 = Number (resultadodasoma.textContent);
    asoma.textContent = (resultado1 + resultado2);
}

btdesomamedias.onclick = function(){
    somadasmedias();
}

//d)a média das médias;

function mediadasmedias(){
    let = resultado1 = Number (resultadofinal.textContent);
    let = resultado2 = Number (resultadodasoma.textContent);
    amedia.textContent = ((resultado1 + resultado2) / 2);
}

btmediadasmeias.onclick = function(){
    mediadasmedias();
}
//Faça um programa que receba 2 valores
// e retorne o maior entre eles

//Faça um programa que receba 4 valores
//e retorne o menor entre eles

//Faça um programa que receba um valor e
//verifique se um número é ímpar






