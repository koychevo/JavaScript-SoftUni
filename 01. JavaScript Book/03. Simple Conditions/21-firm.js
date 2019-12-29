function solve(input) {
    const hoursProDay = 8;
    const overtimeProDay = 2;
    let hoursNeeded = parseInt(input.shift());
    let days = parseInt(input.shift());
    let employees = parseInt(input.shift());
    let hoursAvailable = 0.9 * employees * days * (hoursProDay + overtimeProDay);
    if(hoursAvailable < hoursNeeded) {
        console.log(`Not enough time!${(hoursNeeded - hoursAvailable).toFixed()} hours needed.`);
    } else {
        console.log(`Yes!${(hoursAvailable - hoursNeeded).toFixed()} hours left.`);
    }
}

solve([90, 7, 3]);
solve([99, 3, 1]);
