const myFizzBuzz = require ('./script2');
describe ('teste se funcao fizzBuzz funciona', () => {
    it ('verifica retorno', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(9)).toEqual('fizz');
        expect(myFizzBuzz(25)).toEqual('buzz');
        expect(myFizzBuzz(11)).toEqual(11);
        expect(myFizzBuzz('12')).toEqual(false);
    });
    });