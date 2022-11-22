const techList = (arrayOfTech, nome) => {
    if (arrayOfTech.length===0) return 'Vazio!';
    
    const listaDeTech = arrayOfTech.sort();
    const listaOfialTech = [];

    for (let index = 0; index < listaDeTech.length; index+=1) {
        const tech = listaDeTech[index];
        listaOfialTech.push({
            tech: tech,
            nome,
        });
    }
    return listaOfialTech;
}

module.exports = techList;