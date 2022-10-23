//exercicio 1


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index=0;index<numbers.length;index++) {
    console.log(numbers[index]);
}

//exercicio 2

let soma = 0;
for (let index=0;index<numbers.length;index++) {
    soma+=numbers[index];
}
console.log(soma);


//exercicio 3

let media;
media = soma/numbers.length
console.log(media);

//exercicio 4

for (let index=0;index<numbers.length;index++) {
    if (numbers[index]>20){
        console.log("Valor maior que 20");
    }
    else {
        console.log("Valor menor ou igual a 20");
    }
}

//exercicio 5

let maiorValor=0;
for (let index=0;index<numbers.length;index++) {
if (numbers[index]>maiorValor){
    maiorValor = numbers[index];
}
}
console.log(maiorValor);

//exercicio 6

let quantImpar=0;
for (let index=0;index<numbers.length;index++) {
    if (numbers[index]%2===1){
        quantImpar++;
    }
}
console.log(quantImpar);
if (quantImpar===0){
    console.log("nenhum valor ímpar encontrado");
}


//exercicio 7
const maxInt=999999999999999999999999999;
let menorValor=maxInt;
for (let index=0;index<numbers.length;index++) {
    if (numbers[index]<menorValor){
        menorValor=numbers[index];
    }
}
console.log(menorValor);

//exercicio 8

let meuArray=[];
for (let index=1;index<=25;index++) {
    meuArray.push(index);
}
console.log(meuArray);


//exercicio 9
let divisor=2;
for (let index=0;index<meuArray.length;index++) {
    console.log(meuArray[index]/divisor);
}

//exercicios bonus

array = [4, 7, 8, 9, 15, 1, 14, 24, 6];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
console.log(array);

//exercicio bonus 1

let numbersX = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbersX.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbersX[index] < numbersX[secondIndex]) {
        let posicaoDoNumero = numbersX[index];
        array[index] = array[secondIndex];
        array[secondIndex] = posicaoDoNumero;
      }
    }
  }
console.log(numbersX);

//exercicio bonus 2




