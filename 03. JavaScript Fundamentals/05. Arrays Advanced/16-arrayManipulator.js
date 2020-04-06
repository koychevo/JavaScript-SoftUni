function manipulateArray(numbers, commands) {

    for (let command of commands) {
        let elements = command.split(' ');
        let operation = elements.shift();

        switch (operation) {
            case 'add':
                addElement(elements[1], elements[0], numbers);
                break;
            case 'addMany':
                addMany(elements, numbers);
                break;
            case 'contains':
                containsElement(elements[0], numbers);
                break;
            case 'remove':
                removeElement(elements[0], numbers);
                break;
            case 'shift':
                shiftElements(elements[0], numbers);
                break;
            case 'sumPairs':
                numbers = sumPairs(numbers);
                break;
            case 'print':
                printElements(numbers);
                break;
        }
    }
    
    function addElement(element, index, arr) {
        element = Number(element);
        index = Number(index);
        arr.splice(index, 0, element);
    }

    function addMany(members, arr) {
        let index = Number(members.shift());
        for(let i = 0; i < members.length; i++) {
            addElement(members[i], index, arr);
            index++;
        }
    }

    function containsElement(element, arr) {
        element =Number(element);
        let index = arr.indexOf(element);
        console.log(index);
    }

    function removeElement(index, arr) {
        index = Number(index);
        arr.splice(index, 1);
    }

    function shiftElements(position, arr) {
        position = Number(position);
        while(position > 0) {
            let el = arr.shift();
            arr.push(el);
            position--;
        }
    }

    function sumPairs(arr) {
        for(let i = 0; i < arr.length - 1; i+=2) {
            arr[i] = arr[i] + arr[i+1];
            arr[i+1] = Number.MAX_SAFE_INTEGER;
        }
        return arr.filter(el => el !== Number.MAX_SAFE_INTEGER);
    }

    function printElements(arr) {
        console.log(`[ ${arr.join(', ')} ]`);
    }
}

manipulateArray([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print']);
manipulateArray([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

/*
Task: Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as follows:
•	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
•	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
•	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
•	remove <index> – removes the element at the specified index.
•	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
•	print – stop receiving more commands and print the last state of the array.
*/
