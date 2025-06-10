//1. Encontre o triângulo: Dados três valores X, Y e Z, verificar se eles podem ser os
//comprimentos dos lados de um triângulo e, se forem verificar se éum triângulo
//equilátero, isósceles ou escalenos. Se eles não formarem um triângulo, escrever a
//mensagem. Considere as seguintes propriedades:

let X = document.querySelector ("#X");
let Y = document.querySelector ("#Y");
let Z = document.querySelector ("#Z");
let bttriangulo = document.querySelector("#bttriangulo");
let ResulTriangulos = document.querySelector("#ResulTriangulos");

function calculatriangulo(){
    let ladox = Number (X.value);
    let ladoy = Number (Y.value);
    let ladoz = Number (Z.value);

        if (ladox + ladoy > ladoz && ladox + ladoz > ladoy && ladoy + ladoz > ladox) {

        if (ladox === ladoy && ladoy === ladoz){

            ResulTriangulos.textContent = "Triangulo Equilatero";

        } else if (ladox === ladoy || ladox === ladoz || ladoy === ladoz) {

            ResulTriangulos.textContent = "Triangulo Isosceles";

        } else {
            ResulTriangulos.textContent = "Triangulo Escaleno";
        }
    } else {
        ResulTriangulos.textContent = "Os valores nao formam um triangulo.";
    }
}

bttriangulo.onclick = function(){
    calculatriangulo();
}

//● O comprimento de cada lado em um triângulo émenor que a soma dos outros
//dois lados;
//● Equiláteros: tem os comprimentos dos três lados iguais;
//● Isósceles: tem os comprimentos de dois lados iguais;
//● Escaleno: tem os comprimentos de três lados diferentes.

//Calculadora IMC: Faça uma página para inserir o peso (kg) e altura (m), e o programa
//calcula o IMC e informa a classificação.
//Entradas:
//● Campo para peso.
//● Campo para altura.
//Saída esperada:
//● Exibe o valor do IMC.
//● Mostra a classificação:
//○ Abaixo de 18.5 → Abaixo do peso
//○ 18.5 a 24.9 → Peso normal
//o 25 a 29.9 → Sobrepeso
//○ 30 a 34.9 → Obesidade grau 1
//○ 35 a 39.9 → Obesidade grau 2
//○ 40+ → Obesidade grau 3.

let pesoInput = document.querySelector("#peso");
let alturaInput = document.querySelector("#altura");
let btcalcularimc = document.querySelector("#btcalcularimc");
let resultado = document.querySelector("#resultado");

function calcularIMC() {
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);
    let classificacao;


    let imc =  (peso / (altura * altura ) ).toFixed(2)


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado.textContent = `IMC: ${imc} - Classificacao: ${classificacao}`;
}

btcalcularimc.onclick = calcularIMC;

//3. Calculadora de Impostos: Num determinado Estado, para transferências de veículos, o
//DETRAN cobra uma taxa de 1% para carros fabricados antes de 1990 e uma taxa de
//1.5% para os fabricados de 1990 em diante, a taxa incide sobre o valor de tabela do
//carro. Elabore uma página que leia o ano e o valor de tabela do carro, calcule e informe
//o imposto a ser pago.

let btcalcular = document.querySelector("#btcalcular")
let h3resultado = document.querySelector("#h3resultado")
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")

function calculos (){
    let ano = Number  (num1.value)
    let valor = Number  (num2.value)
    let taxa = 0;

    if (ano < 1990) {
        taxa = 0.01;
      } else {
        taxa = 0.015;
      }

      let imposto = (valor * taxa )

    h3resultado.innerHTML = 
     "O imposto a ser pago e RS = " + imposto;  
}

btcalcular.onclick = function(){
    calculos();
}

//4. Calculadora de salário: Uma empresa concederá um aumento de salário aos seus
//funcionários variável de acordo com o cargo, conforme a tabela abaixo. Faça uma
//página que leia o salário e o cargo de um funcionário e calcule o novo salário. Se o
//cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de
//aumento. Mostre o salário antigo, o novo salário e a diferença.

let inputsalario = document.querySelector("#inputsalario");
let cargos = document.querySelector("#cargos");
let Btcalculaaumneto = document.querySelector("#Btcalculaaumneto");
let Resuldoaumento = document.querySelector("#Resuldoaumento");

function calculaaumento(){
    let salario = Number (inputsalario.value);
    let cargo = (cargos.value);
    let aumento = 0;

    if (cargo === "gerente") {
        aumento = salario * 0.10;
    }

    else if (cargo === "engenheiro") {
        aumento = salario * 0.20; 
    }

    else if (cargo === "tecnico"){
        aumento = salario * 0.30;
    }

    else { 
        aumento = salario * 0.40;
    }

    let novosalario = salario + aumento;


    Resuldoaumento.innerHTML = "O valor do salario antigo e " + salario + "<br>" +
                                "O valor do novo salario com o aumento é de :" + novosalario + "<br>" +
                                "A diferença de salario é de  : " + aumento;
}

Btcalculaaumneto.onclick = function(){
    calculaaumento();
}

//5. Calculadora de Crédito Bancário: Um banco concederáum crédito especial aos seus
//clientes, variável com o saldo médio no último ano. Faça uma página que leia o saldo
//médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo.
//Mostre uma mensagem informando o saldo médio e o valor do crédito.

let inputSaldoM = document.querySelector("#inputSaldoM");
let Btcalculacredito = document.querySelector("#Btcalculacredito");
let Resuldocredito = document.querySelector("#Resuldocredito");

function calculacredito(){
    let saldom = Number (inputSaldoM.value);
    let resultado
    
    if (saldom < 200){
        resultado = "Nenhum crédito"
    }

    else if (saldom < 400){
        let credito = ((saldom / 100) * 20);
        resultado = "Credito concedio : R$ " + credito;
    }

    else if (saldom < 600){
        let credito = ((saldom / 100) * 30);
        resultado = "Credito concedio : R$ " + credito;
    }

    else {
        let credito = ((saldom /100) * 40);
         resultado = "Credito concedio : R$ " + credito;
         
    }

    Resuldocredito.innerHTML = "Saldo medio é de : R$ " + saldom + "<br>" + resultado;
}

Btcalculacredito.onclick = function(){
    calculacredito();
}


//6. Para uma lanchonete, faça uma página que leia o código do item pedido, a quantidade
//e calcule o valor a ser pago por aquele lanche. Considere que a cada execução
//somente serácalculado um item. O cardápio éo seguinte:

let produto = document.querySelector("#produto");
let quantidade = document.querySelector("#quantidade");
let btadicionar = document.querySelector("#btadicionar");
let listaprodutos = document.querySelector("#listaprodutos");

btadicionar.onclick = function () {
    calcularPedido();
};

function calcularPedido() { 
    let codigo = Number(produto.value);
    let qtd = Number(quantidade.value);
    let preco = 0;
    let nome = "";

    switch (codigo) {
        case 1:
            preco = 11.00;
            nome = "Cachorro quente";
            break;
        case 2:
            preco = 8.50;
            nome = "Bauru";
            break;
        case 3:
            preco = 8.00;
            nome = "Misto Quente";
            break;
        case 4:
            preco = 9.00;
            nome = "Hamburger";
            break;
        case 5:
            preco = 10.00;
            nome = "Cheeseburger";
            break;
        case 6:
            preco = 4.50;
            nome = "Refrigerante";
            break;
        default:
            listaprodutos.innerHTML += "<li>Código inválido!</li>";
            return;
    }

    let total = (preco * qtd).toFixed(2);
    listaprodutos.innerHTML += `<li>${qtd}x ${nome} = R$ ${total}</li>`;
}

//7. Sistema de Vendas: Elabore uma página que calcule o que deve ser pago por um
//produto, considerando o preço normal de etiqueta e a escolha da condição de
//pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
//pagamento escolhida e efetuar o cálculo adequado.
//Código Condição de pagamento
//a) Àvista em dinheiro ou cheque, recebe 10% de desconto
//b) Àvista no cartão de crédito, recebe 15% de desconto
//c) Em duas vezes, preço normal de etiqueta sem juros
//d) Em duas vezes, preço normal de etiqueta mais juros de 10%

let inputprecodoproduto = document.querySelector("#inputprecodoproduto");
let Btcalculaproduto = document.querySelector("#Btcalculaproduto");
let formadepagar = document.querySelector("#formadepagar");
let ResulValorFinal = document.querySelector("#ResulValorFinal");

function calculapagamento(){
    let PrecoProduto = Number(inputprecodoproduto.value);
    let FormasPagamento = (formadepagar.value);
    let Vfinal;

    if (FormasPagamento === "descontodez"){
        Vfinal = PrecoProduto - ((PrecoProduto/100) * 10).toFixed(2) + "<br>"
         + "O valor do desconto foi de : R$ " + ((PrecoProduto/100) * 10).toFixed(2);

    }

    else if (FormasPagamento === "descontoquinze"){
        Vfinal = PrecoProduto - ((PrecoProduto/100) * 15).toFixed(2) + "<br>"
         + "O valor do desconto foi de : R$ " + ((PrecoProduto/100) * 10).toFixed(2);
    }

    else if (FormasPagamento === "duasvezessemjuros"){
        Vfinal = PrecoProduto + "<br>"
         + "Não houve alteração no valor final";
    }

    else if (FormasPagamento === "duasvezescomjuros"){
        Vfinal = PrecoProduto + ((PrecoProduto/100) * 10) + "<br>"
         + "O valor do juros foi de : R$ " + ((PrecoProduto/100) * 10).toFixed(2);
    }

    ResulValorFinal.innerHTML = "O valor a pagar será de : R$ " + Vfinal;

}

Btcalculaproduto.onclick = function(){
    calculapagamento();
}

//8. Sistema de pagamentos: Uma escola faz o pagamento de seus professores por
//hora/aula. Faça uma página que solicite ao usuário, o nível do professor e a quantidade
//de horas/aula ele tem na semana. Em seguida, calcule e exiba o salário de um
//professor sabendo que a fórmula para o cálculo do salário ésal = valorHoraAula ∗
//qtdAula ∗ 4.5. O valor da hora/aula do professor édado em função do seu nível:
//Professor Nível 1 R$12,00 por hora/aula
//Professor Nível 2 R$17,00 por hora/aula
//Professor Nível 3 R$25,00 por hora/aula

let NivelProf = document.querySelector("#NivelProf");
let InputHoras = document.querySelector("#InputHoras");
let Btcalculahoras = document.querySelector("#Btcalculahoras");
let Resuldashoras = document.querySelector("#Resuldashoras");

function calculaSaldoProf(){
    let nivel = (NivelProf.value);
    let horaEaula = (InputHoras.value);
    let SalarioProf

    if (nivel === "1"){
        SalarioProf = horaEaula * 12 * 4.5;
    }

    else if (nivel === "2"){
        SalarioProf = horaEaula * 17 * 4.5;
    }

    else if (nivel === "3"){
        SalarioProf = horaEaula * 25 * 4.5;
    }

    Resuldashoras.innerHTML = "O salário do professor é de : R$ " + SalarioProf;
}

Btcalculahoras.onclick = function(){
    calculaSaldoProf()
}