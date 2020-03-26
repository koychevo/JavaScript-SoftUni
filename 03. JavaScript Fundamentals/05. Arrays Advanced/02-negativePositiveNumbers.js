function solve(numbers) {
    let resultArr = [];
    for(let number of numbers) {
        if(number >= 0) {
            resultArr.push(number);
        } else {
            resultArr.unshift(number);
        }
    }

    for(let num of resultArr) {
        console.log(num);
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);

/*
Task: Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/
