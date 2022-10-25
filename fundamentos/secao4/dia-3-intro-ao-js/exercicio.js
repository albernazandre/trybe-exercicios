//exercicio 1 - algoritmo que cria fatorial de 10

let fatorial10=1;
for (let index=10;index>0;index-=1) {
   fatorial10 *= index;
}
console.log(fatorial10);


//exercicio 2 - invertendo ordem das letras

let word = 'andre';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord);

//exercicio 3 - encontrando maior e menor palavra num array

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra= array[0];
for (let i = 0;i<array.length;i+=1) {
  if (array[i].length>maiorPalavra.length){
    maiorPalavra=array[i];
  }
}
console.log(maiorPalavra);

let menorPalavra= array[0];
for (let i = 0;i<array.length;i+=1) {
  if (array[i].length<menorPalavra.length){
    menorPalavra=array[i];
  }
}
console.log(menorPalavra);

//exercicio 4 - retornando maior numero primo de 2 a 50


  let arrNumerosPrimos = [];
  let numero = 50;

  for (let numeroAtual = 2; numeroAtual <= numero; numeroAtual += 1) {
    let numeroPrimo = true; 

    for (let numeroDivisor = 2; numeroDivisor <= numeroAtual; numeroDivisor += 1) {
      if (numeroAtual % numeroDivisor === 0 && numeroAtual !== numeroDivisor) { 
        numeroPrimo = false;
      }
    }

    if (numeroPrimo === true) {
      arrNumerosPrimos.push(numeroAtual);
    }
  }
console.log(arrNumerosPrimos);

let maiorPrimo=arrNumerosPrimos[0];
for (let i = 0;i<arrNumerosPrimos.length;i+=1) {
    if (arrNumerosPrimos[i]>maiorPrimo) {
      maiorPrimo=arrNumerosPrimos[i];
    }
}
console.log(maiorPrimo);