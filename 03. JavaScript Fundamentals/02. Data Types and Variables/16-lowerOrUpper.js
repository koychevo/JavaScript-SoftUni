function solve(letter) {
    let code = letter.charCodeAt(0);
    console.log((code >= 65 && code <= 90) ? 'upper-case' : 'lower-case');
}

solve('L');
solve('f');

/*
Task: Write a function that prints whether a given character is upper-case or lower-case.
*/
