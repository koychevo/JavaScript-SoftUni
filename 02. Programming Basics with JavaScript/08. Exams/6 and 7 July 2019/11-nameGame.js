function solve(input) {
    let winner = '';
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let name = input.shift();

    while(name !== 'Stop') {
        let points = 0;
        for(let i = 0; i < name.length; i++) {
            let trial = Number(input.shift());
            let letter = name[i].charCodeAt(0);
            if(trial === letter) {
                points += 10;
            } else {
                points += 2;
            }
        }

        if(points >= maxPoints) {
            winner = name;
            maxPoints = points;
        }

        name = input.shift();
    }
    return `The winner is ${winner} with ${maxPoints} points!`;
}

console.log(solve(['Ivan', 73, 20, 98, 110, 'Ivo', 80, 65, 87, 'Stop']));
console.log(solve(['Pesho', 124, 34, 111, 97, 99, 'Gosho', 98, 124, 88, 76, 18, 'Stop']));
