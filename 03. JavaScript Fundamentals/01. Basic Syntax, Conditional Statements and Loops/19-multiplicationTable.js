function showTable(number) {
    let num = Number(number);
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

showTable(5);
showTable(2);

/*
Task: You will receive a number as an input from the console. Print the 10 times table for this number. See the examples below for more information.
*/
