function printCharacters(firstChar, secondChar) {
    let firstCharNum = firstChar.charCodeAt(0);
    let secondCharNum = secondChar.charCodeAt(0);
    let start = Math.min(firstCharNum, secondCharNum);
    let end = Math.max(firstCharNum, secondCharNum);
    let result = ''; 
    for(let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `;
    }
    console.log(result);
}

printCharacters('a', 'd');
printCharacters('#', ':');
printCharacters('C', '#');

/*
Task: Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
*/
