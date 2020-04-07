function printOffers(input) {
    let offers = new Map();

    for (let line of input) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);
        let towns = new Map();
        if (offers.has(country)) {
            towns = offers.get(country);
        }
        if (towns.has(town) && cost > towns.get(town)) {
            cost = towns.get(town);
        }
        towns.set(town, cost);
        offers.set(country, towns);
    }

    let countries = Array.from(offers.entries()).sort();
    for (let country of countries) {
        let towns = Array.from(country[1].entries()).sort((a, b) => a[1] - b[1]);
        let line = '';
        for(town of towns) {
            line += `${town[0]} -> ${town[1]} `;
        }
        console.log(`${country[0]} -> ${line}`);
    }
}

printOffers([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

/*
Task: Write a function that collects and orders information about traveling destinations.
As input you will receive an array of strings.
Each string will consist of the following information with format:
"Country name > Town name > Travel cost"
Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.
After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.
*/
