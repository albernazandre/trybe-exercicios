// exercicios

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
  


  // 1-Filtre todos os objetos do gênero ficção científica ou fantasia.

  const fantasyOrScienceFiction = () => { // funcao retornando funcao
    return books.filter((book) => {
      return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
    });
  }

  // 2-Filtre os livros com mais de 60 anos desde sua publicação 
  // e ordene a partir do livro mais velho para o mais novo.

  const oldBooksOrdered = () => {
    const currentYear = new Date().getFullYear(); // pega o ano atual
    return books
      .filter((book) => (currentYear - book.releaseYear) >= 60)
      .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear); // colocando em ordem do mais velho para o mais novo
  }
  console.log(oldBooksOrdered());

  // 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

  const booksByAuthorBirthYear = (birthYear) => {
    return books
      .filter((book) => book.author.birthYear === birthYear) //se o ano de nascimento for igual ao valor passado como parametro
      .map((book) => book.name); // map retorna um array novo
  }
  const result = booksByAuthorBirthYear(1920);
  console.log(result);

  // 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras 
  // de ficção científica ou fantasia e ordene por ordem alfabética.

  const fantasyOrScienceFictionAuthors = () => {
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    return books
      .filter((book) => wantedGenres.includes(book.genre))
      .map((book) => book.author.name)
      .sort();
  }

  console.log(fantasyOrScienceFictionAuthors());

  // 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  const oldBooks = () => {
    const currentYear = new Date().getFullYear();
  
    return books
      .filter((book) => currentYear - book.releaseYear > 60)
      .map((book) => book.name);
  }

  console.log(oldBooks());

  // 6 - Encontre o primeiro resultado cujo nome 
  // registrado começa com três iniciais (por exemplo 'J.K.H.') e retorne o nome do livro.

  // Solução 1

  const expectedResult = 'O Senhor dos Anéis';

  const authorWith3DotsOnName = () => {
  return books.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
    ))[0].name;
  }

  // Solução 2

  const expectResult = 'O Senhor dos Anéis';

  const authorWith3DotOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
    )).name;
  }
  
  


