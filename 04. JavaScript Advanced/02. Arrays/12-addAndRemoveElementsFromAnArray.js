function makeArray(input) {
    let count = 0;
    let numbers = [];
    for (let command of input) {
        count++;
        switch (command) {
            case 'add':
                numbers.push(count);
                break;
            case 'remove':
                numbers.pop();
                break;
        }
    }
    if(numbers.length <= 0) {
        return 'Empty'
    } else {
        return numbers.join('\n');
    }
}

console.log(makeArray(['add', 'add', 'add', 'add']));
console.log(makeArray(['add', 'add', 'remove', 'add', 'add']));
console.log(makeArray(['remove', 'remove', 'remove']));

/*
Task: Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be "add" or "remove". 
The initial number is 1. Each input command should increase that number, regardless of what it is.
Upon receiving an "add" command you should add the current number to your array. 
Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
The input comes as an array of strings. Each element holds a command. 
The output is the array itself, with each element printed on a new line. In case of an empty array, just print "Empty".
*/
