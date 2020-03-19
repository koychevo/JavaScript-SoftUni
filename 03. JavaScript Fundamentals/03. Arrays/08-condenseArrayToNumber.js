function solve(numbers) {
    let condensed = [];
    while(numbers.length !== 1) {
        for(let i = 0; i < numbers.length - 1; i++) {
            condensed[i] = numbers[i] + numbers[i+1];
        }
        numbers = condensed;
        condensed = [];
    }
    console.log(numbers[0]);
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);

/*
Task: Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained. 

For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
*/
