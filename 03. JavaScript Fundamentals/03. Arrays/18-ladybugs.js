function solve(input) {
    let fieldSize = input.shift();
    let ladybugsIndexes = input.shift().split(' ');
    let commands = input;
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let index = Number(ladybugsIndexes[i]);
        field[index] = 1;
    }

    for (let command of commands) {
        command = command.split(' ');
        let index = Number(command[0]);
        field[index] = 0;
        let operation = command[1];
        let move = Number(command[2]);
        let newPosition = operation === 'right' ? index + move : index - move;
        while (field[newPosition] === 1) {
            index = newPosition;
            if (index < 0 || index >= fieldSize) {
                break;
            }
            newPosition = operation === 'right' ? index + move : index - move;
        }
        if (newPosition >= 0 && newPosition < fieldSize) {
            field[newPosition] = 1;
        }
    }
    console.log(field.join(' '));
}

solve([3, '0 1', '0 right 1', '2 right 1']);
solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
solve([ 5, '3', '3 left 2', '1 left -2']);

/*
Task: You are given a field size and the indexes of ladybugs inside the field. A ladybug changes its position either to its left or to its right by a given fly length. A command to a ladybug looks like this: "0 right 1". This means that the little insect placed on index 0 should fly one index to its right. If the ladybug lands on a fellow ladybug, it continues to fly in the same direction by the same fly length. If the ladybug flies out of the field, it is gone.
For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. If the ladybug on index 0 needs to fly to its right by the length of 1 (0 right 1) it will attempt to land on index 1 but as there is another ladybug there it will continue further to the right by additional length of 1, landing on index 2. After that, if the same ladybug needs to fly to its right by the length of 1 (2 right 1), it will land somewhere outside of the field, so it flies away:

 

If you are given ladybug index that does not have ladybug there, nothing happens. If you are given ladybug index that is outside the field, nothing happens. 

Your job is to create the program, simulating the ladybugs flying around doing nothing. At the end, print all cells in the field separated by blank spaces. For each cell that has a ladybug on it print '1' and for each empty cells print '0'. For the example above, the output should be '0 1 0'. 
Input
•	You will receive an array of strings and the first element is an integer – the size of the field
•	The second element is a string containing the initial indexes of all ladybugs separated by a blank space. The given indexes may or may not be inside the field range
•	The next elements in the array are commands in the format:                                                                          "{ladybug index} {direction} {fly length}"
Output
•	Print the all cells within the field in format: "{cell} {cell} … {cell}"
o	If a cell has ladybug in it, print '1'
o	If a cell is empty, print '0' 
*/
