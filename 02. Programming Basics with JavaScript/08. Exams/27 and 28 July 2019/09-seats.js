function solve(input) {
    let ticketsCount = Number(input.shift());
    while(ticketsCount > 0) {
        let ticket = input.shift();
        ticketsCount--;
        let decodedSeat = "";
        let length = ticket.length;
        if(length === 4) {
            let firstLetter = ticket.charCodeAt(0);
            if(firstLetter >= 65 && firstLetter <= 90) {
                decodedSeat = `${ticket[0]}${ticket[1]}${ticket[2]}`;
            } else {
                decodedSeat =  `${ticket[3]}${ticket[1]}${ticket[2]}`;
            }
        }
        if(length === 5 || length === 6) {
            decodedSeat = `${ticket[0]}${ticket.charCodeAt(1)}`;
        }
        console.log(`Seat decoded: ${decodedSeat}`);
    }
}

solve([3, "042W", "W981", "W24578"]);
solve([4, "Y456", "Y8909", "Y8976", "L3472"]);
