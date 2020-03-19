function solve(strings) {
    let length = strings.length;
    for(let i = 0; i < length / 2; i++) {
        let temp = strings[i];
        strings[i] = strings[length - 1 - i];
        strings[length - 1 - i] = temp;
    }
    let result = strings.join(' ');
    console.log(result);
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);

/*
Task: Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements.
*/
