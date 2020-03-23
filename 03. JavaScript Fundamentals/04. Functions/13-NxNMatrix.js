function solve(n) {
    for(let i = 0; i < n; i++) {
        let line = '';
        for(j = 0; j < n; j++) {
            line += `${n} `;
        }
        console.log(line);
    }
}

solve(3);
solve(7);

/*
Task: Write a function that receives a single integer number n and prints nxn matrix with that number.
*/
