/*const hydrate = (string) => {
    const splitString = string.split('');
    let waterGlasses = 0;

    for (let index = 0; index < splitString.length; index+=1) {
        const numberOfDrinks = parseInt(splitString[index]);
        
        if (numberOfDrinks) {
            waterGlasses+=numberOfDrinks;
        }
    }
    
    let glass = 'copo';

    if (waterGlasses > 1) {
      glass = 'copos';
    }
  
    return `${waterGlasses} ${glass} de água`;
  };
  
  module.exports = hydrate;*/

  function hydrate(frase) {

    let numerosDaString = frase.match(/\d+/g); 
    let arrayNumeros = []; 
    let somaDosNum = 0; 
    
    for (let index = 0; index < numerosDaString.length;index += 1){
      arrayNumeros.push(parseInt(numerosDaString[index])); 
    }
    
    
    for (let i = 0; i < arrayNumeros.length; i+=1){  
      somaDosNum += arrayNumeros[i]; 
    }
    
    if (somaDosNum>1){ 
      return somaDosNum + " copos de água"
    }
    else if (somaDosNum===1){
      return somaDosNum + " copo de água"
    }
    }
    

module.exports = hydrate;