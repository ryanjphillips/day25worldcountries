// Counts and returns the amount of languages present in the getCountries object

function sortCountriesLang(obj, amount){
    const totalLanguages = (obj.map((item) => item.languages)).reduce((acc, curr) => acc.concat(curr))
    const setTotalLanguages = new Set(totalLanguages);
    const finalObj = []

    for (const item of setTotalLanguages){
        const filteredLang = totalLanguages.filter((lng) => lng === item);
        finalObj.push({ lang: item, percentage: `${filteredLang.length}%`, count: filteredLang.length})
    }

    return (finalObj.sort((a, b) => b.count - a.count).slice(0, amount));
}