function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    for(let i = floors; i > 0; i--) {
        let floor = "";
        let label = "O";
        if(i % 2 !== 0) {
            label = "A";
        }
        if(i === floors) {
            label = "L";
        }
        for(let j = 0; j < rooms; j++) {
            floor += label + i + j + " ";
        }
        console.log(floor);
    }
}

solve([6, 4]);
solve([9, 5]);
solve([4, 4]);
