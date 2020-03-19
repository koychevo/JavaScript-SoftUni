function solve(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
        if(numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    console.log(sum);
}

solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);

/*
Task: Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.
*/
