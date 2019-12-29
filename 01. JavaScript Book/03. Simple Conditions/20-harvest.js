function solve(input) {
    let area = parseInt(input.shift());
    let grape = parseFloat(input.shift());
    let wineNeeded = parseInt(input.shift());
    let workers = parseInt(input.shift());
    let wineProduced = 0.4 * area * grape / 2.5;
    if(wineProduced < wineNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wineProduced)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        let wineLeft = Math.ceil(wineProduced - wineNeeded);
        console.log(`${wineLeft} liters left -> ${Math.ceil(wineLeft / workers)} liters per person.`);
    }
}

solve([650, 2, 175, 3]);
solve([1020, 1.5, 425, 4]);
