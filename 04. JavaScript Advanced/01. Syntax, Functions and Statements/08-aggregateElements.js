function aggregateElements(arr) {

    function aggregate(arr, func) {
        return func(arr);
    }

    function sum(arr) {
        let sum = 0;
        for(let element of arr) {
            sum += element;
        }
        return sum;
    }

    function inverseSum(arr) {
        let sum = 0;
        for(let element of arr) {
            sum += 1 / element;
        }
        return sum;
    }

    function concatElements(arr) {
        let result = '';
        for(let element of arr) {
            result += element;
        }
        return result;
    }

    console.log(aggregate(arr, sum));
    console.log(aggregate(arr, inverseSum));
    console.log(aggregate(arr, concatElements));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

/*
Task: Write a program that performs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
The output should be printed on the console on a new line for each of the operations.
*/
