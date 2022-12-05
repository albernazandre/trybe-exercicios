// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => { //flatten significa 'achatar', 'aplainar', 'nivelar'
    return arrays.reduce((acc, curr) => {
      return acc.concat(curr); //concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array). concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados. 
    }, []);// valor inicial no reduce é um array vazio
  }
  console.log(flatten());


  // 2 - Crie uma string com os nomes de todas as pessoas autoras.

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


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  return books.reduce((acc, book, index) => {
    if (index === book.length - 1) {// se for o ultimo elemento, retornar...
      return `${acc}${book.author.name}.`;// retorne o ultimo elemento com um ponto '.' no final.
    }
    return `${acc}${book.author.name}, `;// o acc é o acumulador, ele simboliza no caso que o reduce irá iterar cada nome de autor e acumular num string
  }, '');// valor inicial é vazio ''
}
console.log(reduceNames());


// 3 - Calcule a média de idade que as pessoas autoras 
// tinham quando seus respectivos livros foram lançados.

const expectResult = 43;

const averageAge = () => {
  const numberOfBooks = books.length;// retorna a quantidade de objetos

  const sumOfAges = books.reduce((sum, book) => {// sum é o acumulador, book é o elemento iterado
    return sum + (book.releaseYear - book.author.birthYear); // sum recebe os valores das idades dos autores, perceba que não utilizamos o += como no loop for
  }, 0);

  return sumOfAges / numberOfBooks;
}
console.log(averageAge());


// 4 - Encontre o livro com o maior nome.

const expecResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    return books.reduce((biggestBook, currentBook) => {
      return currentBook.name.length > biggestBook.name.length ? currentBook : biggestBook;// operacao ternanria para comparar os elementos
    });
  }
  console.log(longestNamedBook());