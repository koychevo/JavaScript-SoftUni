function solve(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(String.fromCharCode(97+i, 97+j, 97+k));
            }
        }
    }
}

solve(3);

/*
Task: Write a program to receive a number n and print all triples of the first n small Latin letters, ordered alphabetically
*/
