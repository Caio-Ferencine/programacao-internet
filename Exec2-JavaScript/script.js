//Faça uma página que peça ao usuário a cotaçâo do dólar atual.
//Calcule quanto ficaria esse valor se subisse 1%; 2%; 5% e 10%
//E exiba ao usuário os valores calculados.

let calculadolar = document.querySelector("#calculadolar");
let resultados = document.querySelector("#resultados");
let btdolar = document.querySelector("#btdolar");

function jurosdolar (){
    let dolar = Number(calculadolar.value);

    let sobe1 = (dolar/100 * 1 + dolar);
    let sobe2 = ((dolar/100) * 2 + dolar);
    let sobe5 = ((dolar/100) * 5 + dolar);
    let sobe10 = ((dolar/100) * 10 + dolar);

    resultados.innerHTML = "Juros de 1%: " + sobe1+"<br>"+
                           "Juros de 2%: " + sobe2 +"<br>"+
                           "Juros de 5%: " + sobe5 +"<br>"+
                           "Juros de 10%: " + sobe10;      
}
    btdolar.onclick = function (){
        jurosdolar();
    }

//Faça uma página que peça ao usuário quantas pessoas irão comer omelete
//Depois exiba ao usuário quantos ovos e quantas gramas de queijo serão necesários
//Para fazer a comida. considere 2 ovos e 50 gramas de queijo por pessoa

let quantidadeomelete = document.querySelector("#quantidadeomelete");
let btcalculaquijo = document.querySelector("#btcalculaquijo");
let resultadodoqueijo = document.querySelector("#resultadodoqueijo");

function queijoparaomelete(){
    let pessoas = Number(quantidadeomelete.value);

    let ovo = (pessoas * 2);
    let queijo =(pessoas * 50)

    resultadodoqueijo.innerHTML = "Ovos (und) : " + ovo + "<br>" +
                                  "Queijo (g) : " + queijo + "<br>";
}

btcalculaquijo.onclick = function(){
    queijoparaomelete();
}

//Faça uma página que peça ao usuário dois números inteiros.Depois exiba o resultado
//Das principais operações matemáticas, uma por linha.Principais operações:soma, subtração, multipliclação,divisão.

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btcalcula = document.querySelector("#btcalcula");
let resultadosdassoma = document.querySelector("#resultadosdassoma");

function operadores(){

    let numum = Number(num1.value);
    let numdois = Number(num2.value);

    let adicao = (numum + numdois);
    let subtracao = (numum - numdois);
    let multipliclacao = (numum * numdois);
    let divisao = (numum / numdois);

    resultadosdassoma.innerHTML = "Adição : " + adicao +"<br>" +
                                  "Subtração : " +  subtracao + "<br>" +
                                  "Multiplicação : " + multipliclacao + "<br>" +
                                  "Divisão : " + divisao + "<br>";

}

btcalcula.onclick = function(){
    operadores();
}

//Faça uma página que peça ao usuário 4 sabores de pizza.Depois peça quantos
//Refrigerantes ele quer.Ao final, exiba ao usuário quais foram os sabores escolhidos
//E o valor total a pagar.Valores: cada sabor: 
//R$ 12,00; 1 Refrigerante R$ 7,00.

let inputsabor1 = document.querySelector("#inputsabor1");
let inputsabor2 = document.querySelector("#inputsabor2");
let inputsabor3 = document.querySelector("#inputsabor3");
let inputsabor4 = document.querySelector("#inputsabor4");
let quantderefri = document.querySelector("#quantderefri");
let btvalorapagar = document.querySelector("#btvalorapagar");
let resultadovalortotal = document.querySelector("#resultadovalortotal");

function calculaovalor(){
    let sabor1 = (inputsabor1.value);
    let sabor2 = (inputsabor2.value);
    let sabor3 = (inputsabor3.value);
    let sabor4 = (inputsabor4.value);
    let quantrefrigerante = Number (quantderefri.value);

    let valorpizzas = (4 * 12);
    let valorrefri = (quantrefrigerante * 7);
    let valortotal = (valorpizzas + valorrefri);
    
    resultadovalortotal.innerHTML = "Sabores escolhidos: " + "<br>" + sabor1 + "<br>" + sabor2 + "<br>" + sabor3 + "<br>" + sabor4 + "<br>" + "<br>" + 
                                    "Valor a pagar : " +  valortotal;

}

btvalorapagar.onclick = function(){
    calculaovalor();
}
