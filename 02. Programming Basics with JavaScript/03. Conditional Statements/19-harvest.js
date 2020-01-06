function solve(input) {
    let area = Number(input.shift());
    let grape = Number(input.shift());
    let wineNeeded = Number(input.shift());
    let workers = Number(input.shift());
    let wineProduced = 0.4 * area * grape / 2.5;
    let result = "";
    let difference = wineProduced - wineNeeded;
    if(difference < 0) {
        result = `It will be a tough winter! More ${Math.floor(Math.abs(difference))} liters wine needed.`
    } else {
        result = `Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.\n${Math.ceil(difference)} liters left -> ${Math.ceil(difference / workers)} liters per person.`;
    }
    console.log(result);
}

solve([650, 2, 175, 3]);
solve([1020, 1.5, 425, 4]);
