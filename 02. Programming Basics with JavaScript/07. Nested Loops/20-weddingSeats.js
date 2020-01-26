function solve(input) {
    let endSector = input.shift().charCodeAt(0);
    let rows = Number(input.shift());
    let seats = Number(input.shift());
    let seatCounter = 0;
    let startSector = "A".charCodeAt(0);
    for(let sector = startSector; sector <= endSector; sector++) {
        for(row = 1; row <= rows; row++) {
            let seatsInRow = (row % 2 === 0) ? seats + 2 : seats;
            for(let seat = 97; seat < 97 + seatsInRow; seat++) {
                console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(seat)}`);
                seatCounter++;
            }
        }
        rows++;
    }
    console.log(seatCounter);
}

solve(["B", 3, 2]);
solve(["C", 4, 2]);
