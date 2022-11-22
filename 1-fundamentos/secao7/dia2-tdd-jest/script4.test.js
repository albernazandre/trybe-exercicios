const techList = require('./script4.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        nome: 'Lucas'
      },
      {
        tech: 'HTML',
        nome: 'Lucas'
      },
      {
        tech: 'JavaScript',
        nome: 'Lucas'
      },
      {
        tech: 'Jest',
        nome: 'Lucas'
      },
      {
        tech: 'React',
        nome: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;