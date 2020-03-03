function solve(input) {
    let people = Number(input.shift());
    let money = 0;
    let totalBaked = 0;
    for(let person = 1; person <= people; person++) {
        let cookies = cakes = waffles = 0;
        let name = input.shift();
        let product = input.shift();
        while(product !== "Stop baking!") {
            let productCount = Number(input.shift());
            totalBaked += productCount;
            if(product === "cookies") {
                cookies += productCount;
                money += 1.50 * productCount;
            } else if(product === "cakes") {
                cakes += productCount;
                money += 7.80 * productCount;
            } else if(product === "waffles") {
                waffles += productCount;
                money += 2.30 * productCount;
            }
            product = input.shift();
        }
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
    }
    console.log(`All bakery sold: ${totalBaked}`);
    console.log(`Total sum for charity: ${money.toFixed(2)} lv.`);
}

solve([3, "Iva", "cookies", 5, "cakes", 3, "Stop baking!", "George", "cakes", 7, "waffles", 2, "Stop baking!", "Ivan", "cookies", 6, "Stop baking!"]);
solve([2, "Annie", "cakes", 3, "waffles", 6, "cookies", 2, "Stop baking!", "Petya", "waffles", 8, "Stop baking!"]);
solve([3, "George", "cookies", 10, "Stop baking!", "Annie", "waffles", 8, "Stop baking!", "Ivan", "cookies", 6, "waffles", 3, "Stop baking!"]);
