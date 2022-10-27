//exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem-vinda, " + info.personagem);


//exercicio 2 - inserindo novas chaves no objeto

info['recorrente']='Sim';
console.log(info);

//exercicio 3 - for/in showing keys


for (let key in info) {
    console.log(key);
}

//exercicio 4 - for/in showing properties

for (let property in info) {
    console.log(info[property]);
}

//exercício 5 - concatenando obejtos

infoM = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comic #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };


  for (let properties in infoM) {
    if (properties === 'recorrente' && infoM.recorrente==='Sim' && infoPatinhas.recorrente==='Sim') {
        console.log('Ambos recorrentes');
    }
    else {
      console.log(infoM[properties] + ' e ' + infoPatinhas[properties])
    }
  }


  //exercicio 6 - manipulando obejtos

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' +"'" + leitor.livrosFavoritos[0].titulo + "'");

//exercicio 7 - manipulando objetos

let segundoLivro = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
leitor.livrosFavoritos.push(segundoLivro);


console.log(leitor.livrosFavoritos[1]);

//exercio 8

let quantLivros = leitor.livrosFavoritos.length;
console.log("Júlia tem " + quantLivros + " livros favoritos")



