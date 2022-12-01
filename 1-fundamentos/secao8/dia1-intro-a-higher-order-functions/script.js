//exercicio 1

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const employeeGenerator = (fullName) => {
    //const email = fullName.toLowerCase().replace(' ', '_');
    const email = fullName.toLowerCase().split(' ').join('_');
    
    return { fullName, email: `${email}@trybe.com` };
  };

console.log(newEmployees(employeeGenerator));


//exercicio 2 - sorteio

/*const sorteio = (aposta) => {
     const sortedNumber = Math.round((Math.random()*5));
     if (aposta === sortedNumber) {
        return 'Parabéns, você ganhou'
     }
     else {
        return 'Tente novamente'
     }
}
console.log(sorteio(4));*/

const numberChecker = (myNumber, number) => myNumber === number; //funcao que checa se os numeros da aposta e o gerado são identicos

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);//gerador de numero aleatorio

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';//callback é a funcao numberChecker neste cao, como podemos ver ali abaixo no console.log
}
console.log(lotteryResult(2, numberChecker));//parametros de lotteryResult, numero 2 que é a aposta e numberChecker que é a funcao callback

//exercicio 3 - comparador de respostas certas

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    }
    else if (studentAnswer === 'N.A') {
        return 0;
    }
    else {
        return -0.5;
    }
}
const countPoints = (rightAnswers, studentAnswers, action) => { //action é o callback, a funcao compareAnswers no caso
    let counter = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);//a funcao callback compareAnswers receberá como parmetros os elementos dos arrays de respostas dos estudantes e as certas
        counter += actionReturn; // Serão incrementados os valore de acordo com a pontuação dos estudantes
    }
    return `Final result: ${counter} points`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers)); // compareAnswers é o action (a callback)


// Exercicio 4 - usando a funcao FIND, ForEach, every


const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //find

  const authorBornIn1947 = () => {
    return books.find((book) => book.author.birthYear === 1947).author.name;// funcao que retorna outra funcao
  }
  console.log(authorBornIn1947());


  //forEach

  const smallerName = () => {// retorna o menor nome de livro
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {//ou quando a minha variavel estiver vazia ou quando eu encontro um nome de livro com menos caracteres
      nameBook = book.name; //se name está vazio, vou guardar o nome do primeirolivro que encontrar dentro de namebook ou este livro será o de menor numero de caracteres
    }
  });
  return nameBook;
}
console.log(smallerName());

//find

const getNamedBook = () => {
    return books.find((book) => book.name.length === 26);
  }
console.log(getNamedBook());


//every

const expectedResult = false;
const everyoneWasBornOnSecXX = () => { // ver se todos os autores nasceram antes de 2000 ou em 2000, e depois de 1901 ou em 1901
  return books.every((book) => (
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  ));
}

//some

const expectedResult2 = true;
const someBookWasReleaseOnThe80s = () => { // se alguns livros foram lancados entre determinados anos
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}