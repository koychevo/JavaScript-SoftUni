function maintainFriends(input) {
    let friends = input.shift().split(', ');
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;
    let line = input.shift();
    while(line !== 'Report') {
        let commands = line.split(' ');
        if(commands.includes('Blacklist')) {
            blacklistedNamesCount += BlacklistName(commands[1], friends);
        } else if(commands.includes('Error')) {
            lostNamesCount += loseName(commands[1], friends)
        } else if(commands.includes('Change')) {
            changeName(commands[2], commands[1], friends);
        }
        line = input.shift();
    }

    return [
    	`Blacklisted names: ${blacklistedNamesCount}`,
	    `Lost names: ${lostNamesCount}`,
    	friends.join(' ')
    ].join('\n');

    function BlacklistName(name, arr) {
        let index = arr.indexOf(name);
        if(index > -1) {
            arr[index] = 'Blacklisted';
            console.log(`${name} was blacklisted.`);
            return 1;
        } else {
            console.log(`${name} was not found.`);
            return 0;
        }
    }

    function loseName(index, arr) {
        if(arr[index] !== 'Blacklisted' && arr[index] !== 'Lost') {
            console.log(`${arr[index]} was lost due to an error.`);
            arr[index] = 'Lost';
            return 1;
        } else {
            return 0;
        }
    }

    function changeName(name, index, arr) {
        if(index > -1 && index < arr.length) {
            console.log(`${arr[index]} changed his username to ${name}.`);
            arr[index] = name;
        }
    }
}

console.log(maintainFriends(['Mike, John, Eddie', 'Blacklist Mike', 'Error 0', 'Error 1', 'Change 2 Mike123','Report']));
console.log(maintainFriends(['Mike, John, Eddie, William', 'Error 3', 'Error 3', 'Change 0 Mike123', 'Blacklist Eddie', 'Report']));

/*
Task: Our player is having trouble with his friend list and some guys are disappearing without a reason so he asks you to create a program that will figure out what is going on and at the end will bring him a report.
On the first line you will receive all his friends separated by ", ". On the next lines until the "Report" command you will receive commands. The commands could be:
•	Blacklist {name}
•	Find the name in the friend list and change it to "Blacklisted" and print on the console:
•	"{name} was blacklisted."
•	If the name is not in the friend list print:
•	"{name} was not found." 
•	Error {index}  
•	Check if the username at the given index is not "Blacklisted" or "Lost". If it isn't, change the username to "Lost" and print on the console:
•	"{name} was lost due to an error." 
•	Change {index} {newName}  
•	Check if the user at index position is in range of the array. If he is, change the current username with the new one and print on console:
•	"{currentName} changed his username to {newName}."
After you receive "Report" print on the console the count of blacklisted names, the count of lost names, and the friend list separated by a single space.
Input
•	The first input line will contain the usernames that need to be stored.
•	On the next input lines until "Report" you will receive commands.
Output
•	The output should be in the following format:
•	"Blacklisted names: {blacklistedNamesCount}"
•	"Lost names: {lostNamesCount}"
•	"{name1} {name2} .. {nameN}"
*/
