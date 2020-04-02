function printPersonInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    for(let info in person) {
        console.log(`${info}: ${person[info]}`);
    }
}

printPersonInfo("Peter", "Pan", "20");

/*
Task: Write a function that receives 3 parameters, sets them to an object and prints the object's properties by key and value in the format: "{key}: {value}"
The input comes as 3 separate strings in the following order: firstName, lastName, age.
*/
