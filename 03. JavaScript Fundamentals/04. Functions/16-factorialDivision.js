function factorialDivision(numOne, numTwo) {
    let result = factorial(numOne) / factorial(numTwo);
    console.log(result.toFixed(2));

    function factorial(num) {
        let factorial = 1;
        for(let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);

/*
Task: Write a function that receives two integer numbers. Calculate factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.
*/
