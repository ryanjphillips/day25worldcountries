function main(){

    const countryObj = (sortCountriesLang(getCountries(), 10));
    const popObj = (sortCountriesPop(getCountries(), 10));
    const popButton = document.getElementById("population-button");
    const langButton = document.getElementById("languages-button");
    const navHeading = document.querySelector("h3");
    navHeading.textContent = "Please click the population or language button to get started!";


    popButton.addEventListener("click", () => {

        navHeading.textContent = "Top ten most populous countries (graphs in percentage)"
        createTable(popObj.length, (Object.values(popObj[0]).length), popObj)});

    langButton.addEventListener("click", () => {

        navHeading.textContent = "Top ten most spoken languages in the world (graphs in percentage)";
        createTable(countryObj.length, (Object.values(countryObj[0]).length), countryObj)});
}

main();