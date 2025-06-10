//A imobiliária Imóbilis vende apenas terrenos retangulares. Faça uma página para ler as
//dimensões de um terreno e depois exibir a área do terreno.

let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let btcalculaarea = document.querySelector("#btcalculaarea");
let H3resultado = document.querySelector("#H3resultado");

function calculaarea(){
    let large = Number(largura.value);
    let lenght = Number(comprimento.value);

    let area = (large * lenght);

    H3resultado.textContent = "A area do terreno e :" + area;
}

btcalculaarea.onclick = function(){
    calculaarea();
}

//Faça uma página para calcular quantas ferraduras são necessárias para equipar todos
//os cavalos comprados para um haras.

let inputcavalos = document.querySelector("#inputcavalos");
let btparaequipar = document.querySelector("#btparaequipar");
let quantdeferraduras = document.querySelector("#quantdeferraduras");

function calculaferraduras(){
    let cavalos = (inputcavalos.value);

    let ferraduras = (cavalos * 4);

    quantdeferraduras.textContent = "O total de ferraduras e de :" + ferraduras;

}

btparaequipar.onclick = function(){
    calculaferraduras();
}

//A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de
//broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o
//dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto

//deve guardar numa conta de poupança (10% do total arrecadado). Você foi contratado
//para fazer os cálculos para o dono. Com base nestes fatos, faça uma página para ler as
//quantidades de pães e de broas, e depois calcular os dados solicitados.

let inputpaes = document.querySelector("#inputpaes");
let inputbroas = document.querySelector("#inputbroas");
let btvendasdiarias = document.querySelector("#btvendasdiarias");
let valortotal = document.querySelector("#valortotal");
let poupanca = document.querySelector("#poupanca");

function calculaganhos(){
    let paes = Number (inputpaes.value);
    let broas = Number (inputbroas.value);

    let vtdepaes = (paes * 0.12);
    let vtdebroas = (broas * 1.50);
    let ganhototal = (vtdepaes + vtdebroas);
    let poupanca = (ganhototal/100 * 10);

    valortotal.innerHTML ="Ganho total foi de :" + "R$ " + ganhototal + "</br>"+ 
                            "E deve guardar na poupança : " + "R$ " + poupanca;
   
}

btvendasdiarias.onclick = function(){
    calculaganhos();
}

//Desenvolva uma página para ler o nome e a idade de uma pessoa, e exibir quantos dias
//de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias.
//Ex.: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída:
//MARIA, VOCÊ JÁ VIVEU 6935 DIAS


let inputnome = document.querySelector("#inputnome");
let inputidade = document.querySelector("#inptutidade");
let btcalculadias = document.querySelector("#btcalculadias");
let diasvividos = document.querySelector("#diasvividos");

function calculadias(){
    let nome = (inputnome.value);
    let idade = Number (inputidade.value);

    let dias = (idade * 365);

    diasvividos.innerHTML = nome +  " VOCÊ JÁ VIVEU " + dias + " DIAS";
}

btcalculadias.onclick = function(){
    calculadias();
}

//Um motorista deseja colocar no seu tanque X reais de gasolina. Desenvolva uma
//página para ler o preço do litro da gasolina e o valor do pagamento,
//e exibir quantos litros ele conseguiu colocar no tanque.

let inputquantdegasolina = document.querySelector("#inputquantdegasolina");
let inputprecogasolina = document.querySelector("#inputprecogasolina");
let btcalculagas = document.querySelector("#btcalculagas");
let quantdelitrosevalorpago = document.querySelector("#quantdelitrosevalorpago");

function calculargas(){
    let quantgas = Number (inputquantdegasolina.value);
    let preco = Number (inputprecogasolina.value);

    let pagamento = (quantgas / preco);

    quantdelitrosevalorpago.innerHTML = "O valor do pagamento é : " + quantgas + " R$" + "<br>" + "Foram colocados " + pagamento + " litros de gasolina";
}

btcalculagas.onclick = function(){
    calculargas();
}

//O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Desenvolva
//uma página que leia o peso do prato montado pelo cliente (em quilos) e imprima o
//valor a pagar. Considere que a balança já desconte o peso do prato.

let inputpesoprato = document.querySelector("#inputpesoprato");
let btcalculaprecodoprato = document.querySelector("#btcalculaprecodoprato");
let valorapagar = document.querySelector("#valorapagar");

function calculavalorapagar(){
    let pesoprato = Number (inputpesoprato.value);
    
    let precototal = (pesoprato * 12 - 0.50);

    valorapagar.innerHTML = "O valor a pagar é de : " + precototal + " R$" + "<br>" + 
                            "Foi descontado : 50g da tara do prato";

}

btcalculaprecodoprato.onclick = function(){
    calculavalorapagar();
}

//Crie uma página para entrar com o dia e o mês de uma data e 
//informar quantos dias se passaram desde o início do ano. Esqueça 
//a questão dos anos bissextos e considere sempre que um mês possui 30 dias.

let inputdias = document.querySelector("#inputdias");
let inputmes = document.querySelector("#inputmes");
let btcalculadiaspassados = document.querySelector("#btcalculadiaspassados");
let diaspassados = document.querySelector("#diaspassados");

function calculadiaspassados(){
    let dias = Number (inputdias.value);
    let mes = Number (inputmes.value);

    let diasquepassou = (mes - 1) * 30 + dias;

    diaspassados.innerHTML = "Já se passaram : " + diasquepassou + " dias desde o início do ano"; 
}

btcalculadiaspassados.onclick = function(){
    calculadiaspassados();
}

//Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma
//sendo vendida respectivamente por 10, 12 e 15 reais. Construa uma página em que o
//usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a
//uma venda, e a máquina informe quanto será o valor arrecadado.

let inputP = document.querySelector("#inputP");
let inputM = document.querySelector("#inputM");
let inputG = document.querySelector("#inputG");
let btcalculacamisetas = document.querySelector("#btcalculacamisetas");
let Rtotalarrecado = document.querySelector("#Rtotalarrecado");

function calculavalorarrecadado(){
    let P = Number (inputP.value);
    let M = Number (inputM.value);
    let G = Number (inputG.value);

    let valorarrecadado = P * 10 + M * 12 + G * 15;

    Rtotalarrecado.innerHTML = "O valor arrecadado foi de : " + valorarrecadado + " R$";
}

btcalculacamisetas.onclick = function(){
    calculavalorarrecadado();
}

//Construa uma página para calcular a distância entre dois pontos do 
//plano cartesiano. Cada ponto é um par ordenado (x,y).

let X1 = document.querySelector("#X1");
let Y1 = document.querySelector("#Y1");
let X2 = document.querySelector("#X2");
let Y2 = document.querySelector("#Y2");
let btcalculadistancia = document.querySelector("#btcalculadistancia");
let Rdaarea = document.querySelector("#Rdaarea");

function calculaarea(){
    let pontox1 = Number (X1.value);
    let pontoy1 = Number (Y1.value);
    let pontox2 = Number (X2.value);
    let pontoy2 = Number (Y2.value);

    let distancia = Math.sqrt(((pontox2 - pontox1) ** 2) + ((pontoy2 - pontoy1) **2));

    Rdaarea.innerHTML = " distância é de :" + distancia;
}

btcalculadistancia.onclick = function(){
    calculaarea();
}

//Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça
//uma página para converter este tempo em anos, meses e dias. Considere que cada mês
//possui sempre 30 dias.

let inputdiasemacidente = document.querySelector("#inputdiasemacidente");
let btcalculasemacidente = document.querySelector("#btcalculasemacidente");
let Rtemposemacidente = document.querySelector("#Rtemposemacidente");

function calculadiassemacidente(){
    let DIASsemAcidente = (inputdiasemacidente.value);

    let anos = Math.floor(DIASsemAcidente / 365);
    let restante = (DIASsemAcidente % 365);
    let meses = Math.floor(DIASsemAcidente / 12);
    let dias = (restante % 30);

    Rtemposemacidente.innerHTML = "O tempo sem acidente é de : " + anos + " ano(s) " + meses + " meses e " + dias + " dias";
   
}

btcalculasemacidente.onclick = function(){
    calculadiassemacidente();
}

//Faça uma página para ler o salário de um funcionário e aumentá-lo em 15%. Após o
//aumento, desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento
//e o salário final.

let salariofuncionario = document.querySelector("#salariofuncionario");
let btcalculareajuste = document.querySelector("#btcalculareajuste");
let Rdosalarios = document.querySelector("#Rdosalarios");

function calculasalario(){
    let salario = Number (salariofuncionario.value);

    let salariocomaumento = (salario/100 * 15 + salario);
    let imposto = (salario/100 * 8);
    let salariofinal = (salariocomaumento - imposto);

    Rdosalarios.innerHTML = "O salário inicial era de : " + salario + "R$" + "</br>" + 
                            "Com o aumento o salário foi para : " + salariocomaumento +  "R$" + "</br>" +
                            "Descontando os impostos o salário final ficou de : " + salariofinal + "R$";
}

btcalculareajuste.onclick = function(){
    calculasalario();
}

//Faça uma página para ler um número inteiro (assuma até́ três dígitos) e imprimir a
//saída da seguinte forma: CENTENA = x DEZENA = x UNIDADE = x

let inputnuminteiro = document.querySelector("#inputnuminteiro");
let btcalculaCDU = document.querySelector("#btcalculaCDU");
let RdaCDU = document.querySelector("#RdaCDU");

function mostraCDU(){
    let = numero = Number (inputnuminteiro.value);

    let C = Math.floor(numero / 100);
    let D = Math.floor((numero % 100) / 10);
    let U = (numero % 10);

    RdaCDU.innerHTML =  "Centena : " + C + "</br>" + 
                        "Dezena : " + D + "</br>" + 
                        "Unidade : " + U + "</br>";
}

btcalculaCDU.onclick = function(){
    mostraCDU();
}

//Calcule a área de uma pizza que possui um raio R (pi=3.14).

let inputraio = document.querySelector("#inputraio");
let btcalculaareaa = document.querySelector("#btcalculaareaa");
let Rdoraio = document.querySelector("#Rdoraio");

function calculaarea(){
    let pi = 3.14;
    let raio = Number (inputraio.value);

    let area = pi * raio * raio

    Rdoraio.innerHTML = "O resultado do raio é de : " + area;
}

btcalculaareaa.onclick = function(){
    calculaarea();
}

//Três amigos, Carlos, André e Felipe, decidiram rachar igualmente a conta de um bar.
//Faça uma página para ler o valor total da conta e imprimir quanto cada um deve pagar,
//mas faça com que Carlos e André não paguem centavos. Ex.: uma conta de R$101,53
//resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.

let inputvalordaconta = document.querySelector("#inputvalordaconta");
let btcalculaconta = document.querySelector("#btcalculaconta");
let Rdoracha = document.querySelector("#Rdoracha");

function calcularacha(){
    let valordaconta = Number (inputvalordaconta.value);

    let VcomCentavos = Math.floor(valordaconta / 3);
    let VdoFelipe = valordaconta - (VcomCentavos * 2);

    Rdoracha.innerHTML =    "Carlos : " + VcomCentavos + "</br>" +
                            "André : " + VcomCentavos + "</br>" +
                            "Felipe : " + VdoFelipe.toFixed(2);
}

btcalculaconta.onclick = function(){
    calcularacha();
}


