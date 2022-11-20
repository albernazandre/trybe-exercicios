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

//Requiito 8 - verificando se o par chave/valor existe no objeto

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj); //o Object.entries retorna um array de arrays
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }//o entries[index][0] vai percorrer o primeiro array que é das chaves, ja o entries[index][1] vai percorrer o segundo array que é de valores
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));


//Requisitos Bonus - Retorne o total de estudantes apenas de Matemática

const getNumberOfMathStudents = (objeto) => {

  let total = 0;
  const keys = Object.keys(objeto);

  for (index in keys) {
    if (keys[index].materia === 'Matemática') {
      total += objeto[keys[index].numeroEstudantes];
    }
  }
  return total;
}
console.log(getNumberOfMathStudents(allLessons));


//Requisitos Bonus - retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes


const getInfo = (obj, name) => { //funcao que ira capturar as materias ministradas e numero de alunos
  const allLessons = []; //array que ira receber quais materias o professor minitrou
  let allStudent = 0; //variavel auxiliar que recebera o total de estudantes que receberam aulas do professor
  const values = Object.values(obj);//variavel que chama os valores do objeto
  for (index in values) { //loop que ira percorrer os valores do objeto em questao
    if (values[index].professor === name) { //se o professor for igual ao parametro name dado à funcao
      allLessons.push(values[index].materia)//a variavel allLessons ira puxar as materias correspondentes
      allStudent += values[index].numeroEstudantes;//a variavel allStudents ira somar a quantidade de estudantes
    }
  }
  return { aulas: allLessons, estudantes: allStudent };//retorne as materias e a quantidade de estudantes
}

const createReport = (allLessons, name) => {//funcao que cria o relatorio sobre o professor (um objeto com as informações)
  const report = {};//variavel auxiliar que conterá o objeto com as informaçoes
  report.professor = name;//o nome do professor vem do parametro name
  Object.assign(report, getInfo(allLessons, name));//ese allLessons é da variavel allLessons com todos os objetos (Object.assign)
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
