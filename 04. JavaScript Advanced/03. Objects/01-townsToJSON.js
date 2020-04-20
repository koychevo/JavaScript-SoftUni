function createJson(lines) {
    let towns = [];
    let townObj = {};

    for (let i = 0; i < lines.length; i++) {
        let [, town, latitude, longitude] = lines[i].split('|').map(el => el.trim());
        if (i === 0) {
            townObj[town] = '';
            townObj[latitude] = '';
            townObj[longitude] = '';
        } else {
            let newTown = {};
            let keys = Object.keys(townObj);

            newTown[keys[0]] = town;
            newTown[keys[1]] = parseFloat(Number(latitude).toFixed(2));
            newTown[keys[2]] = parseFloat(Number(longitude).toFixed(2));
            towns.push(newTown);
        }
    }
    return JSON.stringify(towns);
}

console.log(createJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(createJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']));

/*
Task: You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
•	The output should be an array of objects wrapped in JSON.stringify(). 
•	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!
*/
