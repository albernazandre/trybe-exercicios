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

  