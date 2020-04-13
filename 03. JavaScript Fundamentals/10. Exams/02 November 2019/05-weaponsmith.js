function printCraft(input) {
    let inputLines = input.slice();
    let weapons = inputLines.shift().split('|');
    let line = inputLines.shift();

    while (line !== 'Done') {
        let commands = line.split(' ');
        if (commands[0] === 'Move' && isMovePosible(commands[1], Number(commands[2]), weapons.length)) {
            moveElement(commands[1], Number(commands[2]), weapons);
        }
        if (commands[0] === 'Check') {
            let positions = commands[1];
            let filtered = [];
            if(positions === 'Even') {
                filtered = weapons.filter((el, i) => i % 2 === 0);
            }
            if(positions === 'Odd') {
                filtered = weapons.filter((el, i) => i % 2 !== 0);
            }
            console.log(filtered.join(' '));
        }
        line = inputLines.shift();
    }

    return `You crafted ${weapons.join('')}!`;

    function isMovePosible(direction, index, limit) {
        if (index > limit - 1) {
            return false;
        }
        if (direction === 'Left' && index <= 0) {
            return false;
        }
        if (direction === 'Right' && index >= limit - 1) {
            return false;
        }
        return true;
    }

    function moveElement(direction, index, arr) {
        let i;
        if (direction === 'Right') {
            i = index + 1;
        }
        if (direction === 'Left') {
            i = index - 1;
        }
        let el = arr[index];
        arr[index] = arr[i];
        arr[i] = el;
    }
}

console.log(printCraft(['ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done']));
console.log(printCraft(['ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done']));

/*
Task: You are a legendary weaponsmith. Heroes from all over the world come to you for the greatest weapons so they can rid the world of the greatest threats. In order for you to craft a weapon you need to assemble its particles.
You will receive a line with string particles, separated by "|", representing parts of the name of a weapon. The particles will be in mixed order and you can align them through the commands, which you will receive on the next lines, until you receive the "Done" command. They will come the form of strings, separated by space. There are five supported commands: 
•	"Move Left {index}":
•	Moves the value at {index} position to the Left, if the index exist and the move is possible.
•	If movement is not possible, do nothing.
•	"Move Right {index}":
•	Moves the value at {index} position to the Right, if the index exists and the move is possible.
•	If movement is not possible, do nothing.
•	"Check Even":
•	Print the elements at even index positions, separated by a single space.
•	"Check Odd":
•	Print the elements at odd index positions, separated by a single space.
 After the "Done" command, the weapon name is considered correct and you should print the particles in their current order joined together in the following format: "You crafted {WeaponName}!"
Input
•	On the first line, you will receive parts of the given weapon name in a mixed order separated by "|".
•	On the next lines, until the "Done" command, you will receive commands in the format described above.
Output
•	Print the needed output upon the "Done" command as a string.
•	Output should be in the format "You crafted {Weapon name}!"
*/
    