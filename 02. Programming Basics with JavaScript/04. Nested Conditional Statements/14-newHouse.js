function solve(input) {
    let flowers = input.shift();
    let qty = Number(input.shift());
    let budget = Number(input.shift());
    let costs = 0;
    let result = "";
    switch (flowers) {
        case "Roses":
            costs = (qty > 80) ? 0.9 * qty * 5 : qty * 5;
            break;
        case "Dahlias":
            costs = (qty > 90) ? 0.85 * qty * 3.8 : qty * 3.8;
            break;
        case "Tulips":
            costs = (qty > 80) ? 0.85 * qty * 2.8 : qty * 2.8;
            break;
        case "Narcissus":
            costs = (qty < 120) ? 1.15 * qty * 3 : qty * 3;
            break;
        case "Gladiolus":
            costs = (qty < 80) ? 1.2 * qty * 2.5 : qty * 2.5;
            break;
    }
    if (costs > budget) {
        result = `Not enough money, you need ${(costs - budget).toFixed(2)} leva more.`;
    } else {
        result = `Hey, you have a great garden with ${qty} ${flowers} and ${(budget - costs).toFixed(2)} leva left.`;
    }
    console.log(result);
}

solve(["Roses", 55, 250]);
solve(["Tulips", 88, 260]);
solve(["Narcissus", 119, 360]);
