function printCityInfo(name, area, population, country, postcode) {
    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode
    }

    for(let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}

printCityInfo("Sofia"," 492", "1238438", "Bulgaria", "1000");

/*
Task: Receive five single strings. 
Create a city object which will hold the city name, area, population, country and postcode. 
Loop through all the keys and print them with their values in format: "{key} -> {value}"
The input will be in the following order: name, area, population, country and postCode.
See the examples below.
*/
