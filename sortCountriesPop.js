// Sort countries by argument and how many object you want returned

function sortCountriesPop(obj,  amount){
    const sortedObj = obj.sort((a, b,) => b.population - a.population);

    const finalObj = [];
    for (let i = 0; i < sortedObj.length; i++){
        finalObj.push({countryName: sortedObj[i].name, percentage: `${((sortedObj[i].population / 7881368000) * 100)}%`, population: sortedObj[i].population});
    }
    return (finalObj.slice(0, amount));
} 