function solve(input) {
    let flight = input.shift();
    let minStay = Number.MAX_SAFE_INTEGER;
    let minStayFlight = "";
    let minStayPrice = 0;
    while(flight !== "End") {
        let price = Number(input.shift());
        let stay = Number(input.shift());
        if(stay < minStay) {
            minStay = stay;
            minStayFlight = flight;
            minStayPrice = price;
        }
        flight = input.shift();
    }
    let minStayInHours = Math.floor(minStay / 60);
    let minStayInMins = minStay % 60;
    console.log(`Ticket found for flight ${minStayFlight} costs ${(minStayPrice * 1.96).toFixed(2)} leva with ${minStayInHours}h ${minStayInMins}m stay`);
}

solve(["W64301", 60, 140, "FR9967", 80, 200, "FR0066", 45, 60, "End"]);
solve(["W64301", 60, 140, "W30510", 110, 40, "W51440", 160, 70, "FR0066", 75, 75, "End"]);
solve(["W43122", 30, 120, "W35400", 30, 100, "End"]);
