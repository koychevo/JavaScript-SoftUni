function solve(arr1, arr2) {
    for(let element of arr1) {
        for(let el of arr2) {
            if(el === element) {
                console.log(el);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);

/*
Task: Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.
*/
