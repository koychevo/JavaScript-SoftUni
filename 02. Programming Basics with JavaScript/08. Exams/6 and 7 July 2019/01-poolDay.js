function calculateCosts(input) {
    let people = Number(input.shift());
    let entranceFee = Number(input.shift());
    let deckChairPrice = Number(input.shift());
    let umbrellaPrice = Number(input.shift());

    let deckChair = Math.ceil(0.75 * people);
    let umbrella = Math.ceil(people / 2);
    let costs = people * entranceFee + deckChair * deckChairPrice + umbrella * umbrellaPrice;
    return `${costs.toFixed(2)} lv.`;
}

console.log(calculateCosts([21, 5.50, 4.40, 6.20]));
console.log(calculateCosts([50, 6, 8, 4]));
console.log(calculateCosts([100, 8, 6, 4]));
