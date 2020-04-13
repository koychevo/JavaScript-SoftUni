function printTanks(input) {
    let inputLines = input.slice();
    let tanks = inputLines.shift().split(', ');
    let commandCount = Number(inputLines.shift());
    for (let i = 0; i < commandCount; i++) {
        let commands = inputLines.shift().split(', ');
        let operation = commands.shift();

        switch (operation) {
            case 'Add':
                addTank(commands[0], tanks);
                break;
            case 'Remove':
                tanks = removeTank(commands[0], tanks);
                break;
            case 'Remove At':
                tanks = removeAtIndex(Number(commands[0]), tanks);
                break;
            case 'Insert':
                tanks = insertTank(Number(commands[0]), commands[1], tanks);
                break;
        }
    }

    return tanks.join(', ');

    function addTank(name, arr) {
        if(arr.includes(name)) {
            console.log('Tank is already bought');
        } else {
            arr.push(name);
            console.log('Tank successfully bought');
        }
    }

    function removeTank(name, arr) {
        if(arr.includes(name)) {
            let index = arr.indexOf(name);
            console.log('Tank successfully sold');
            return removeElement(index, arr);
        } else {
            console.log('Tank not found');
            return arr;
        }
    }

    function removeAtIndex(index, arr) {
        if(index >= 0 && index < arr.length) {
            console.log('Tank successfully sold');
            return removeElement(index, arr);
        } else {
            console.log('Index out of range');
            return arr;
        }
    }

    function insertTank(index, name, arr) {
        if(index >= 0 && index < arr.length) {
            if(arr.includes(name)) {
                console.log('Tank is already bought');
                return arr;
            }
            console.log('Tank successfully bought');
            arr.splice(index, 0, name);
            return arr;
        } else {
            console.log('Index out of range');
            return arr;
        }
    }

    function removeElement(index, arr) {
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(i === index) {
                continue;
            }
            newArr.push(arr[i]);
        }
        return newArr;
    }

}

console.log(printTanks(['T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy']));
console.log(printTanks(['T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1']));


    /*
    Task: Tom is a world of tanks player and he likes to collect premium tanks. You will receive a list of Tom's already owned premium vehicles on a single line separated by ", ". On the next n lines you will receive commands that could be:
•	Add, {tankName}: Check if he already owns the wanted tank. 
•	If he owns it, print on console:  "Tank is already bought"
•	If not, print on console:  "Tank successfully bought" and add it to the tank list.
•	Remove, {tankName}: Check if he owns the tank.
•	If he owns it print on console:  "Tank successfully sold" and remove it from the tank list.
•	If not print on console: "Tank not found"
•	Remove At, {index}: Check if the index is in the range of the list.
•	If not print on console: "Index out of range" and continue.
•	If it’s in range, remove at the given index and print on console: "Tank successfully sold"
•	Insert, {index}, {tankName}: Check if the index is in range of the list and check if he already owns the tank.
•	If not print on console: "Index out of range" and continue.
•	If it's in range and he doesn't own the tank then add the tank at the given index and print on console:
•	"Tank successfully bought"
•	If the tank is in range and he owns it already than print on console:
•	"Tank is already bought"
After you go through all the commands you need to print the list on a single line separated by ", ".
Input
•	The first input line will contain the list of already owned tanks.
•	The second input line  will be  the number of commands – an integer number in range [0…50].
•	On the next input lines you will be receiving commands.
Output
•	As output you must print a single line containing the elements of the list, joined by  ", ".
*/
