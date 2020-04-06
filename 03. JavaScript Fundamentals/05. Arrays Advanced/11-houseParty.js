function solve(input) {
    let party = input.slice();
    let guests = [];
    
    for(let line of party) {
        line = line.split(' ');
        let guest = line[0];
        let index = checkForGuest(guest, guests);
        if(line.length === 3) {
            if(index > - 1) {
                console.log(`${guest} is already in the list!`);
            } else {
                guests.push(guest);
            }
        } else if(line.length === 4) {
            if(index > -1) {
                guests.splice(index, 1);
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }
    for(let guest of guests) {
        console.log(guest);
    }

    function checkForGuest(name, arr) {
        return arr.indexOf(name);
    }
}

solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);

/*
Task: Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-	"{name} is going!"
-	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.
*/
