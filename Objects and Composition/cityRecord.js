function solve(nameCity, populationCity, tresuryCity) {
    const city = {
        name: nameCity,
        population: populationCity,
        tresury: tresuryCity,
    }
    let {tresury: newTresury, name } = city;
    console.log(newTresury,name);// chrez :newTresury promenqme imeto na  klucha  izvun obekta
    let secondCity = city; // chrez referenciq promenqme i purvonachalniq obekt taka kato sochat kum edin i sushti obekt v pameta ... 
    secondCity.name = 'Varna';
    console.log(secondCity);

    for (const key in secondCity) {
    console.log(`obj ${key} -> ${secondCity[key]}`);
    }
    
    // obxojdat se sus forOf 
    const keys = Object.keys(secondCity);
    console.log(keys);
    
    const value = Object.values(secondCity);
    console.log(value);

    const entries = Object.entries(city);
   for (const [key, value] of entries) {
        console.log(key);
        console.log(value);
   }

    return city



}

console.log(solve('Tortuga', 7000, 15000))