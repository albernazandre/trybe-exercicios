/*function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }*/


const myRemove = require ('./myRemove');

describe ('teste se ocorrerá retorno esperado', () => {
    
    it ('testa se myRemove retorna o array tendo como param o numero 3 e 5', () => {
        const array = [1, 2, 3, 4];
        expect (myRemove(array, 3)).toEqual([1, 2, 4]);
        expect (myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
        expect (myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });  
});



