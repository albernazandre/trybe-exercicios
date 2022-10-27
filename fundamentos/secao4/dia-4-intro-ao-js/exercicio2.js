//exercicio 1 de funcoes do dia 4 da secao 4

function verificaPalindrome (palavra) {
    for (index in palavra) {
        if(palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    }
    return true;
}

//ou ainda usando outro método

function verificaPalindromo(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    }
    else {
        return false;
    }
  }

  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindromo('desenvolvimento')); //false

//exercicio 2 - retornando indice do maior valor

function indiceDoMaior(numbers) {
    let indiceMaior = 0;
    for (let indice in numbers) {
      if (numbers[indiceMaior] < numbers[indice]) {
        indiceMaior = indice;
      }
    }

    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 9, 34, 7, 10, 12])); //4

  //indice do menor


  function indiceDoMenor(numbers) {
    let indiceMenor = 0;
    for (let indice in numbers) {
      if (numbers[indiceMenor] > numbers[indice]) {
        indiceMenor = indice;
      }
    }

    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 9, 34, 7, 10, 12])); //4



  //exercicio 3 - retornando a maior palavra num array com function

  function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice];
        }
    }
    return maiorPalavra;
  }
console.log(maiorPalavra(['José', 'Francisco', 'Euclides', 'Marcela']));


//exercicio 4 - pegando numero que mais se repete num array


function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index in numeros) { //percorrer o array
      let verificaNumero = numeros[index]; //armazena numeros do array na variavel auxiliar
      for (let index2 in numeros) { //segundo loop para fazer a comparacao entre numeros armazenados do array na variavel e os numeros do array
        if (verificaNumero === numeros[index2]) { //se numeros forem iguais temos uma repeticao
          contNumero += 1; //incremento em caso de repeticao dos numeros
        }
      }
      if (contNumero > contRepetido) { //se houver repeticao, ou seja, contnumero for maior que 0
        contRepetido = contNumero; //a variavel contRepetido recebe o valor do numero de repeticoes
        indexNumeroRepetido = index; //variavel indexNumeroRepetido recebe o numero mais repetido
      }
      contNumero = 0; //contNumero volta a ser 0
    }
  
    return numeros[indexNumeroRepetido]; //retorne o numero mais repetido
  }
  
  console.log(maisRepetido([2, 4, 5, 3, 2, 3, 4, 4]));


//ou - outra maneira de resolver


function maisRepetido(numeros) { 
    let num = {}; //crio um objeto com valor 'undefined'
  
    for (let index = 0; index < numeros.length; index += 1) { //loop para percorrer os numeros do array
      let valor = numeros[index]; //variavel que vai capturar os numeros do array
      if (num[valor] === undefined) { //valor inicial da chave para cada numero do array vai ser 1
        num[valor] = 1; //valor 1 para cada numero capturado no array
      } else { 
        num[valor] = num[valor] + 1; //se o valor se repetir não será mais undefined incialmente e assim receberá 1 + o incremento de 1
      }
    } 
    //console.log(num);
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) { //loop nas propriedades de num
      if (contRepetido < num[prop]) { //propriedade com maior numero associada ao numero de valor
        contRepetido = num[prop]; //num[prop] é o valor da propriedade que é o numero de repeticoes
        contNumero = prop; //propriedade é numero do array
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2


//exercicio 4 - soma de numeros

function somaTodosNumeros(numeros) {
  let total = 0; //variavel que receberá soma

  for (let index = 1; index <= numeros; index += 1) {
    total += index; //soma
  }
  return total;
}

console.log(somaTodosNumeros(10)); //15


//exercicio 5 - verificar se o fim de uma palavra é igual ao de outra


function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join(''); //fazendo as palavras de parametro ficarem ao inverso
  let inversoFimPalavra = fimPalavra.split('').reverse().join(''); //isso é importante porque trazendo as ultimas letras para o início fica mais fácil averiguar
  let result; //declarando variavel que vai receber resultado se as palavras tem o final parecido ou não
  for (let index = 0; index < inversoFimPalavra.length; index += 1) { //loop vai percorrer o inverso da palavra menor
    if (inversoPalavra[index] !== inversoFimPalavra[index]) { //se não for igual a palavra menor invertida e o começo da palavra maior invertida retorna falso
      result = false; 
      break;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true; //se for igual retorna vdd
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'try')); //true
console.log(verificaFimPalavra('joaofernando', 'nando')); //false