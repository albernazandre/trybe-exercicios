const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//requisito 1
const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

//requisito 2

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson3));

//requisito 3

const sizeOfObject = (objeto) => Object.keys(objeto).length;
console.log(sizeOfObject(lesson1));

//requisito 4

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson3));

//requisito 5

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

//requisito 6 - retornando o numero total de estudante de todas as aulas

const getNumberOfStudents = (objeto) => {

  let total = 0;
  const keys = Object.keys(objeto);

  for (index in keys) {
    total += objeto[keys[index]].numeroEstudantes; //incrementa o valor de numero de etudantes à variavel total a cada iteração
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));

//Requisito 7 - pegando valor do objeto atraves de posicao no array retornado por Object.values

const getValue = (objeto,number) => Object.values(objeto)[number];
console.log(getValue(lesson1, 2));

//Requiito 8 - 

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj); //o Object.entries retorna um array de arrays
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }//o entries[index][0] vai percorrer o primeiro array que é das chaves, ja o entries[index][1] vai percorrer o segundo array que é de valores
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));