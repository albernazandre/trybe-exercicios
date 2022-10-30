//exercicio 1 - transformando em arrow function


/*function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());*/

const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());

//exercicio 2

/*function hello(nome) {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));*/

const hello = nome => `Olá, ${nome}!`

let nome = 'Ivan';
console.log(hello(nome));

//exercicio 3

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let sobrenome = 'Pires';

console.log(nomeCompleto(nome, sobrenome));




//exercicio 4

let speed = 90;

const speedCar = (speed) => ( //repare que utilizamos parenteses
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida` //if booleano simplificado
);

console.log(speedCar(130));


//exercicio bonus 1


let status = 'desligado';

const ligarDesligar = () => (
  status === 'desligado' ? status = 'ligado' : status = 'desligado'  //se status desligado, ligue. Caso contrário, desligue
)

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado


//exercicio bonus 2

let pi = 3.14;
const circleArea = (raio) => (
    pi * raio ** 2
);

console.log(circleArea(5));

//exercicio bonus 3 


const longestWord = (frase) => {
    let fraseSplitada = frase.split(' '); //usando split a frase ja vira automaticamente um array
    let maxLength = 0; //variavel auxiliar que vai comparar tamanho das palavras
    let result = ''; //variavel que vai receber resultado na forma de string

    for (const palavra of fraseSplitada){ //loop simplificado
        if (palavra.length>maxLength){ //se tamanho da palavra maior que variavel (vai pegar o maior indice)
            maxLength=palavra.length;//o comprimento maximo sera igual ao comprimento maximo da palavra
            result = palavra; //result receberá a palavra retornada
        }
    }
   
return result;
}


console.log(longestWord('Existem muitas criaturas na Terra, mas a mais interessante se chama Michael Scott.'));

//outra forma de resolver bem mais rapido usando metodo sort

const longstWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]; //funcao dentro de funcao

console.log(longstWord("Antonio foi ao banheiro e não sabemos o que acontecerá com ele."));