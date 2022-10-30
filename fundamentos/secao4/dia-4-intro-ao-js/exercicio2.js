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



//exercicios bonus 1 - funcao para ler algarismos romanos

const numerosRomanos = { //objeto que guarda valores correspondentes aos algarismos romanos
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};
function romanoParaDecimal(numero) { 
  numero = numero.toLowerCase(); //deixa os algarismos romanos em minusculo e assim não tem problema de case sensitive
  const len = numero.length; //variavel para capturar o tamanho da string
  let soma = numerosRomanos[numero[len - 1]]; //variável que receberá o valor final da função, vai iniciar com o valor do último algarismo romano
  let atual = numerosRomanos[numero[len - 1]];//variável auxiliar no loop que incia também com o último alarismo romano

  for (let i = 2; i <= len; i += 1) {//loop inicia no 2, ou seja, posição 3
    const prox = numerosRomanos[numero[len - i]];//vai armazenar os valores anteriores a posicao 2

    if (atual <= prox) {//Caso atual seja menor ou igual a prox, soma deve somar seu valor com prox. Caso contrário, soma deve subtrair com prox
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4



//exercicio bonus 3


function arrayOfNumbers(vector) {
  const result = [];

  for (let index = 0; index < vector.length; index += 1) {
    if (vector[index]%2===0 && vector[index] > 0){
      result.push(vector[index]);
    }
    
  }

  return result;

}

console.log(arrayOfNumbers([2, 3, 4, 5, 6, 7, 8]));



//exercicio bonus 3


const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {}; //objeto que vai serar frutas e quantidade

for (let index = 0; index < basket.length; index += 1) { //loop que percorre array de frutas
  const fruit = basket[index]; //variavel auxiliar que vai receber valores do array de frutas
  if (!result[fruit]) result[fruit] = 0; //se o resultado nao estiver dentro do array, o resultado é zero, caso contrário incrementa 1
  result[fruit] += 1;
}

const summaries = []; //variavel array que vai recerber as mensagens de quantas frutas de cada especie ha no cesto

for (fruit in result) { //loop que vai percorrer o objeto result
  let message = `${result[fruit]} ${fruit}`; //variavel auxiliar que forma a mensagem, result[fruit] é a propriedade com o numero de frutas
  if (result[fruit] > 1) message += 's'; //adiciona o 's' quando houver mais de uma especie de fruta
  summaries.push(message); //o array vai puxas 'x frutas' de cada especie
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`); //console log com a mensagem pretendida


//exercicio bonus 4


let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};


//letra a

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
console.log(`O morador do bloco 2 de nome ${ultimoMoradorBlocoDois.nome} ${ultimoMoradorBlocoDois.sobrenome} mora no ${ultimoMoradorBlocoDois.andar}º andar, apartamento ${ultimoMoradorBlocoDois.apartamento}`);


//letra b


for (let index = 0; index < moradores.blocoUm.length; index += 1) { //loop que passa pelo objeto dos moradores do bloco um
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome); //acessando todos s nomes e sobrenomes atraves do loop com o [index] 
}










