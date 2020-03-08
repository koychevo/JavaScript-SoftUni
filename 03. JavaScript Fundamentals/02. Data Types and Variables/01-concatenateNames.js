function solve(firstName, lastName, delimiter) {
    console.log(`${firstName}${delimiter}${lastName}`);
}

solve('John', 'Smith', '->');
solve('Jan', 'White', '<->');
solve('Linda', 'Terry', '=>');

/*
Task: Write a function which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.
Hints
Use string interpolation. 
*/