function matchName(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let validNames = [];
    name = pattern.exec(names);
    while(name !== null) {
        validNames.push(name[0]);
        name = pattern.exec(names);
    }
    return validNames.join(' ');
}



//function matchName(names) {
//    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
//    let validNames = names.match(pattern);
//    return validNames.join(' ');
//}

console.log(matchName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'));

/*
Task: Write a JavaScript function to match full names from a list of names and print them on the console.
Writing the Regular Expression
First, write a regular expression to match a valid full name, according to these conditions:
•	A valid full name has the following characteristics:
o	It consists of two words.
o	Each word starts with a capital letter.
o	After the first letter, it only contains lowercase letters afterwards.
o	Each of the two words should be at least two letters long.
o	The two words are separated by a single space.
*/
