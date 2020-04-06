function solve(input) {
    let numbers = input.slice(0, 1)[0].split(' ');
    let commands = input.slice(1);
    for (let command of commands) {
        let [func, element, index] = command.split(' ');

        switch (func) {
            case 'Add':
                addNumber(numbers, element);
                break;
            case 'Remove':
                removeNumber(numbers, element);
                break;
            case 'RemoveAt':
                removeAtIndex(numbers, element);
                break;
            case 'Insert':
                insertNumber(numbers, element, index);
                break;
        }
    }
    return numbers.join(' ');

    function addNumber(arr, num) {
        arr[arr.length] = num;
    }

    function removeNumber(arr, num) {
        let index = arr.indexOf(num);
        if (index > -1) {
            removeAtIndex(arr, index);
        }
    }

    function removeAtIndex(arr, index) {
        arr.splice(index, 1);
    }

    function insertNumber(arr, num, index) {
        arr.splice(index, 0, num);
    }
}

console.log(solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']));

/*
Task: Write a function that manipulates an array of numbers. 
•	Add {number}: add a number to the end of the array
•	Remove {number}: remove number from the array
•	RemoveAt {index}: removes number at a given index
•	Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
Print the final state of the array (separated by single space).
The input comes as array of strings. First element will be a string containing the array to manipulate. Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.
*/
