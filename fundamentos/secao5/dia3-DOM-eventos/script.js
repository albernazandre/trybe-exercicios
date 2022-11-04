const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo


  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => { //funcao para criar os elementos que vao abrigar os dias do mes
  let getDaysList = document.querySelector('#days');//selecionando o id days que é o elemento que abrigara os numeros dos dias do mes

  for (let index = 0; index < decemberDaysList.length; index += 1) { //loop que percorre o array de dias
    
    let day = decemberDaysList[index]; //variavel auxiliar que vai abrigar os dias do array
    let dayItem = document.createElement('li');//criando os elementos da lista
    dayItem.innerHTML = day;//plotando os numeros nos elementos li da lista
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth(); //chamando a execução da funcao de criação da lista com os dias do mes


//PARTE 2


const createHolidayButton = (buttonName) => { //funcao que cria o botao 'feriados'
  let buttonContainer = document.querySelector('.buttons-container');//selecionando a classe de onde o botao sera criado
  let newButton = document.createElement('button');//variavel que contem a criação do botao
  let newButtonID = 'btn-holiday';//variavel que abriga o nome da id do botao

  newButton.innerHTML = buttonName; //nome que vai inscrito no botao é o parametro da funcao que recebera a string "Feriados"
  newButton.id = newButtonID;//a variavel que criou o botao recebe como id a variavel do id que abriga o nome do id na forma de string
  
  buttonContainer.appendChild(newButton);//a variavel que chama o container onde o botao esta localizado recebe como filha o botao
}

createHolidayButton('Feriados'); //funcao é chamada


//PARTE 3


const displayHolidays = () => { //funcao que muda a cor dos elementos li que possuem a classe holiday
  let getHolidayButton = document.querySelector('#btn-holiday');//variavel que seleciona o botao holiday atraves do seu id
  let getHolidays = document.querySelectorAll('.holiday') //variavel que seleciona os elementos li que contem a classe holiday
  let backgroundColor = 'rgb(238,238,238)';//variavel que abriga a cor de fundo 
  let setNewColor = 'white'; //cor de fundo padrao representada na variavel setNewColor

    getHolidayButton.addEventListener('click', () => { //adicionando um escutador que recebera o tipo 'click' e uma funcao que e dada imediatamente dentro dos parenteses do listener
    for (let index = 0; index < getHolidays.length; index += 1) { //loopque percorre os elementos que possuem a classe .holiday
      if (getHolidays[index].style.backgroundColor === setNewColor) { //se os elementos da classe holiday possuirem com cor de fundo a cor 'white', adicione outra cor de fundo
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor; //caso contrario mantenha 'white'
      }
    }
  });
}
displayHolidays();//chama a funcao


//PARTE 4


const createFridayButton = (buttonName) => { //criando o botao que tera como parametro (neste caso nome do botao) 'Sexta-Feira'
  let buttonContainer = document.querySelector('.buttons-container');//selecionando o container que recebera o botao
  let newButton = document.createElement('button');//criando o botao
  let newButtonID = 'btn-friday';//variavel abrigando o id do botao

  newButton.innerHTML = buttonName;//botao recebe como nome o param da funcao
  newButton.id = newButtonID;//botao recebe como id a variavel que abriga o id
  buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
}
createFridayButton('Sexta-feira');//funcao e chamada

//PARTE 5


const displayFridays = (fridaysArray) => {//funcao que faz com que click no botao friday retorne um SEXTOU nos dias que sao sexta-feira
  let getFridayButton = document.querySelector('#btn-friday');//selecionando o botao friday por meio de seu id
  let fridays = document.getElementsByClassName('friday');//selecionando os elementos que possuem a classe friday
  let newFridayText = 'SEXTOU o/';//variavel que abrigara a mensagem que desejamos plotar ao se clicar no botao

  getFridayButton.addEventListener('click', () => {//listener que contem o tipo de evento click e a funcao dentro dos parenteses
  for (let index = 0; index < fridays.length; index += 1) {//loop que vai percorrer os elementos que possuem a classe friday
    if (fridays[index].innerHTML !== newFridayText) {//se os elementos com a classe friday nao tiverem como texto 'SEXTOU', irao receber este texto ao se clicar no botao
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
    } else {//caso contrario mantem as datas, ou seja, ao se cicar no botao novamento, volta pro original
        fridays[index].innerHTML = fridaysArray[index];//fridayArray é o parm da funcao que recebe como valores os dias correspondentes as sextas, ja que estes dias devem ser recolocados ao se clicar novamente no botao
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];//parametro da funcao sao os dias que serao recolocados na funcao ao se clicar novamente no botao
displayFridays(decemberFridays);//chamo a funcao


//PARTE 6


const dayMouseOver = () => { //funcao que faz com que ao se passar o mouse por cima dos elementos da lista faz o elemento aumentar de tamanho
  let days = document.querySelector('#days');//selecionando o elemnto com o id 'days' que é elemento ul no html que recebe os dias do mes
  days.addEventListener('mouseover', (event) => { //listener com o tipo 'mouseover' (mouse assa por cima) ea funcao que fara com que numero mudem de tamanho ao se passar o mouse por cima
    event.target.style.fontSize = '30px';//pega o evento alvo (target) e altera o tamanho da fonte da letra
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => { //funcao responsavel por quando o mouse sai de cima do elemento
  let days = document.querySelector('#days'); //selecionando o elemnto do id days
  days.addEventListener('mouseout', (event) => {//listener responsavel pelo mouse sair de cima do elemento
    event.target.style.fontSize = '20px';//tamanho volta aos 20px
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
dayMouseOver();//chama as funcoes a funcionarem
dayMouseOut();


//PARTE 7

const newTaskSpan = (task) => { //criando um elemento span dentro do container com a classe my-tasks

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');//criando a elemento span

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
newTaskSpan('projeto');//recebe como parametro a string projeto



//PARTE 8

const newTaskDiv = (color) => {//criando um div com parametro que recebe cor de back da div

  let tasksContainer = document.querySelector('.my-tasks');//div sera no container representado pela classe my-tasks
  let newTask = document.createElement('div');//criando o elemento div

  newTask.className = 'task';//a task que esta na div recebe o nome de classe task
  newTask.style.backgroundColor = color;//a cor de back é o param da funcao
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
newTaskDiv('green');//chama a funcao


//PARTE 9


const setTaskClass = () => {//criando condicional para qual sera a classe da Task
  let selectedTask = document.getElementsByClassName('task selected');//selecionando o elemento html com a classe task selected
  let myTasks = document.querySelector('.task');//selecionando o elemento html de classe task
  myTasks.addEventListener('click', (event) => {//listener com o tipo click que acionará uma funcao que 
    if (selectedTask.length === 0) { //se o tamanho do input for 0 (ou seja, se nao houver input), a classe é task selected
      event.target.className = 'task selected';
    } else {//se houver input a classe é task ao se clicar no elemento de classe .task
      event.target.className = 'task';
    }
  });
}

setTaskClass(); //chama a funcao


//PARTE 10


const setDayColor = () => { //
  let selectedTask = document.getElementsByClassName('task selected');//selecionando o elemento da classe task selected
  let days = document.querySelector('#days');//selecionando o elemento de id days
  let taskDiv = document.querySelector('.task');//selecionando o elemento de classe task
  let taskColor = taskDiv.style.backgroundColor; //variavel que ira capturar o back color d elemento de classe .task
  
  days.addEventListener('click', (event) => { //listener de click que acionará uma funcao que muda a cor de elementos html
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {//se o tamanho do elemento de classe 'task selected' for maior que 0 e a cor do evento for diferente da task color
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) { //se a cor for identica alterara para outra
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

setDayColor();


//PARTE BONUS


const addNewTask = () => { //
  let getInputField = document.querySelector('#task-input');//selecionando o elemento por meio da id task-input
  let addInputButton = document.querySelector('#btn-add');//selecionando o elemento botao por meio da id btn-add
  let getTaskList = document.querySelector('.task-list');//selecionando elemento por meio da classe .task-list

  addInputButton.addEventListener('click', () => {//adicionando listener de click
    if (getInputField.value.length > 0) {//se input length for maior que 0, ou seja, se houver input
      let newLi = document.createElement('li');//crie  um li
      newLi.innerText = getInputField.value;//texto sera o input

      getTaskList.appendChild(newLi);//elemento recebe as li
      getInputField.value = '';//o valor sera transformado em string
    } else {//caso contrario exibe mensagem de alerta
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {//listener com o tipo keyup que faz com que ao apertar enter a funcao seja ativada
    if (event.key === 'Enter' && getInputField.value.length > 0) {//se apertar enter e houver valor criei o novo elemento li
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();//chama a funcao

