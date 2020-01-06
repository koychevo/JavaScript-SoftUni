function solve(input) {
    let magnolia = Number(input.shift());
    let hyacinth = Number(input.shift());
    let rose = Number(input.shift());
    let cactus = Number(input.shift());
    let presentPrice = Number(input.shift());
    let moneyAfterTaxes = 0.95 * (magnolia * 3.25 + hyacinth * 4 + rose * 3.5 + cactus * 8); let result = "";
    let difference = moneyAfterTaxes - presentPrice;
    if (difference < 0) {
        result = `She will have to borrow ${Math.ceil(Math.abs(difference))} leva.`;
    } else {
        result = `She is left with ${Math.floor(difference)} leva.`;
    }
    console.log(result);
}

solve([2, 3, 5, 1, 50]);
solve([15, 7, 5, 10, 100]);
