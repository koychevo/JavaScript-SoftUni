function solve(input) {
    const dogFood = 2.5;
    const animalFood = 4;
    let dogs = parseInt(input.shift());
    let animals = parseInt(input.shift());
    let price = dogs * dogFood + animals * animalFood;
    console.log(`${price.toFixed(2)} lv.`);
}

solve([5, 4]);
solve([13, 9]);
