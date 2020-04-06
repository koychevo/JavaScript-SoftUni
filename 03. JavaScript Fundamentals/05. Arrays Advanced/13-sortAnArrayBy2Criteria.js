function solve(input) {
    let sortedArr = input.slice();
    sortedArr.sort((a, b) => {
        if(a.length !== b.length) {
            return a.length - b.length;
        } else {
            let firstItem = a.toLowerCase();
            let secondItem = b.toLowerCase();
            if(firstItem > secondItem) {
                return 1;
            }
            if(firstItem < secondItem) {
                return -1;
            }
            if(firstItem === secondItem) {
                return 0;
            }
        }
    })
    for(let item of sortedArr) {
        console.log(item);
    }
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);

/*
Task: Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.
*/
