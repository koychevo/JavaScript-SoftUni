function solve(input) {
    let dayOfReservation = Number(input.shift());
    let monthOfReservation = Number(input.shift());
    let dayOfArrival = Number(input.shift());
    let monthOfArrival = Number(input.shift());
    let dayOfLeaving = Number(input.shift());
    let monthOfLeaving = Number(input.shift());
    let priceProNight = 30;
    if(dayOfReservation + 10 <= dayOfArrival || monthOfReservation < monthOfArrival) {
        priceProNight = 25;
    } 
    let costs = (dayOfLeaving - dayOfArrival) * priceProNight;
    if(monthOfReservation < monthOfArrival) {
        costs *= 0.8;
    }
    console.log(`Your stay from ${dayOfArrival}/${monthOfArrival} to ${dayOfLeaving}/${monthOfLeaving} will cost ${costs.toFixed(2)}`);
}

solve([21, 7, 28, 8, 30, 8]);
solve([10, 5, 15, 5, 18, 5]);
solve([20, 10, 5, 11, 10, 11]);
