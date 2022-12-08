// Exercicio 1 - Array Destructuring

const myList = [5, 2, 3];
const swap = ([a, b, c]) => [c, b, a]; // funcao que modifica a ordem do array de tres elementos


// Exercicio 2 - tranformando array em obj

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

/*const toObject = ([a, b, c]) => (
    {
        modelo: a,
        marca: b,
        ano: c,
    })
    console.log(toObject(palio));*/
const toObject = ([name, brand, year]) => ({ name, brand, year });
console.log(toObject(palio));


// Exercicio 3 - Default Parameter

// escreva greet abaixo

const greet = (user = 'pessoa cadastrada', greeting = 'Hi') => `${greeting} ${user}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// Exercicio 4 - Default Destructuring

const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const student2 = {
    name: `Vitor`,
    age: 20,
  }
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  const getLastName = (objStudent) => {
    const { lastName = `lastName não preenchido` } = objStudent;
    return lastName;
  }
  
  console.log(getLastName(student1));
  console.log(getLastName(student2));


  // Exercicio 5 - Array Destructuring - Acessando estudantes

  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [ studentA, [ studentB, student3 ], [student4, student5 ] ] = moreStudents;

console.log(studentA, studentB, student3, student4, student5);