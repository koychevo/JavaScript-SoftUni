function solve(numbers) {
    let topInt = [];
    let index = 0;
    for(let i = 0; i < numbers.length - 1; i++) {
        let num = numbers[i];
        let isTop = true;
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[j] >= num) {
                isTop = false;
                break;
            }
        }
        if(isTop) {
            topInt[index] = num;
            index++;
        }
    }
    topInt[index] = numbers[numbers.length-1];
    console.log(topInt.join(' '));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);

/*
Task: Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 
Output
Print all top integers on the console, separated by single space.
*/
