function printWinners(input) {
    let inputParticipants = input.slice();
    let names = inputParticipants.shift().split(', ');
    let participants = new Map();
    for(let name of names) {
        participants.set(name, 0);
    }

    let digitPattern = /\d/g;
    let letterPattern = /[A-Za-z]/g;

    let line = inputParticipants.shift();

    while(line !== 'end of race') {
        let name = '';
        let letter = letterPattern.exec(line);
        while(letter !== null) {
            name += letter;
            letter = letterPattern.exec(line);
        }
        if(participants.has(name)) {
            let points = participants.get(name);
            let point = digitPattern.exec(line);
            while(point !== null) {
                points += Number(point);
                point = digitPattern.exec(line);
            }
            participants.set(name, points);
        }
        line = inputParticipants.shift();
    }

    let runners = Array.from(participants.entries()).sort((a, b) => b[1] - a[1]);

    let winners = [`1st place: ${runners[0][0]}`, `2nd place: ${runners[1][0]}`, `3rd place: ${runners[2][0]}`];
    return winners.join('\n');
}

console.log(printWinners(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
    ]));

    /*
    Task: Write a function that processes information about a race. On the first line you will be given list of participants separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters. In between them you could have some extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the list of racers contains the name of the person. If you receive the same person more than once just add the distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
"1st place: {first racer}
2nd place: {second racer}
3rd place: {third racer}"
*/
