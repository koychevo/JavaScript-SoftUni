function makeObject(str) {
    let person = JSON.parse(str);

    for(let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

makeObject('{"name": "George", "age": 40, "town": "Sofia"}');

/*
Task: Write a function that receives a string in JSON format and converts it to object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
*/
