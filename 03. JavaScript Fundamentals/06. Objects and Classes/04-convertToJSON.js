function printJson(name, lastName, hairColor ) {
    let person = {
        name,
        lastName,
        hairColor
    }

    return JSON.stringify(person);
}

console.log(printJson('George', 'Jones', 'Brown'));

/*
Task: Write a Function That Receives Name, LastName, HairColor and Sets Them to an Object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.
*/
