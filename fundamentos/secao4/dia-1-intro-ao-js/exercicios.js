/*Utilize if/else para fazer um programa que defina três números em constantes e 
retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if*/

const n1 = 15;
const n2 = 16;
const n3 = 17;

if (n1%2===0 || n2%2===0 || n3%2===0) {
    console.log(true);
}
else {
    console.log(false);
}

/*Utilize if/else para fazer um programa que defina três números em constantes e 
retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if*/

if (n1%2===1 || n2%2===1 || n3%2===1) {
    console.log(true);
}
else {
    console.log(false);
}

/*Utilize if/else para escrever um programa que se inicie com dois valores em duas 
constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, 
calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá 
ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos 
seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de 
venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/

const custoProduto = 40;
const produtoVenda = 80;
let impostoSobreOCusto = 1.2;
let quantVenda = 1000;

const lucro = (produtoVenda-custoProduto*impostoSobreOCusto)*quantVenda
console.log(lucro);

if (custoProduto<0 || produtoVenda<0 || impostoSobreOCusto<0 || quantVenda<0) {
    console.log("Erro de input");
}
else {
    console.log("Número válido");
}


/*Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

const faixa1SalarioInss=1556.94;
const faixa2SalarioInss=2594.92;
const faixa3SalarioInss=5189.82;
const faixaTetoSalarioInss=5189.82;

const faixa1SalarioIr=1903.98;
const faixa2SalarioIr=2826.65;
const faixa3SalarioIr=3751.05;
const faixa4SalarioIr=4664.68;
const faixaTetoSalarioIr=4664.68;

const primeiraFaixaInss=0.08
const segundaFaixaInss=0.09;
const terceiraFaixaInss=0.11;
const tetoInss=570.88;

const primeiraFaixaIr=0;;
const segundaFaixaIr=0.075;
const terceiraFaixaIr=0.15;
const quartaFaixaIr=0.225;
const tetoIr=0.275;

const dedutorIr1=0;
const dedutorIr2=142.80;
const dedutorIr3=354.80;
const dedutorIr4=636.13;
const dedutorTetoIr=869.36;


let salarioBruto;
let salarioLiqInss;
let salarioLiqFinal;

salarioBruto=3000;

if (salarioBruto<=faixa1SalarioInss) {
    salarioLiqInss=salarioBruto-(salarioBruto*primeiraFaixaInss);
    console.log(salarioLiqInss);
}
else if (salarioBruto<=faixa2SalarioInss && salarioBruto>faixa1SalarioInss) {
    salarioLiqInss=salarioBruto-(salarioBruto*segundaFaixaInss);
    console.log(salarioLiqInss);
}
else if (salarioBruto<=faixa3SalarioInss && salarioBruto>faixa2SalarioInss) {
    salarioLiqInss=salarioBruto-(salarioBruto*terceiraFaixaInss);
    console.log(salarioLiqInss);
}
else if (salarioBruto>faixaTetoSalarioInss) {
    salarioLiqInss=salarioBruto-tetoInss;
    console.log(salarioLiqInss);
}
else {
    console.log("valor de salário líquido de INSS inválido!");
}

if (salarioLiqInss<=faixa1SalarioIr) {
    salarioLiqFinal=salarioLiqInss-(salarioLiqInss*primeiraFaixaIr-dedutorIr1);
    console.log(salarioLiqFinal);
}
else if (salarioLiqInss>faixa1SalarioIr && salarioLiqInss<=faixa2SalarioIr) {
    salarioLiqFinal=salarioLiqInss-(salarioLiqInss*segundaFaixaIr-dedutorIr2);
    console.log(salarioLiqFinal);
}
else if (salarioLiqInss>faixa2SalarioIr && salarioLiqInss<=faixa3SalarioIr) {
    salarioLiqFinal=salarioLiqInss-(salarioLiqInss*terceiraFaixaIr-dedutorIr3);
    console.log(salarioLiqFinal);
}
else if (salarioLiqInss>faixa3SalarioIr && salarioLiqInss<=faixa4SalarioIr) {
    salarioLiqFinal=salarioLiqInss-(salarioLiqInss*quartaFaixaIr-dedutorIr4);
    console.log(salarioLiqFinal);
}
else if (salarioLiqInss>faixaTetoSalarioIr) {
    salarioLiqFinal=salarioLiqInss-(salarioLiqInss*tetoIr-dedutorTetoIr);
    console.log(salarioLiqFinal);
}
else {
    console.log("Valor de salário líquido de IR inválido!");
}


