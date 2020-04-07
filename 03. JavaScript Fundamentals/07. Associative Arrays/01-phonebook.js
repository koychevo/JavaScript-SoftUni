function printPhonebook(input) {
    let phonebook = {};

    for(let line of input) {
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }

    for(let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

printPhonebook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112','Tim 0876566344']);

/*
Task: Write a function that stores information about a person’s name and his phone number. The input comes as an array of strings. Each string contains the name and the number. If you receive the same name twice just replace the number. At the end print the result without sorting it. Try using an associative array.
*/
