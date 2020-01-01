function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift().toLowerCase();
    let destination = "Somewhere in";
    let accommodation = "Hotel";
    let budgetUsed = 0.9 * budget;
    if (budget <= 100) {
        budgetUsed = 0.3 * budget;
        destination += " Bulgaria";
        accommodation = "Camp";
    } else if (budget <= 1000) {
        budgetUsed = 0.4 * budget;
        destination += " Balkans";
        accommodation = "Camp";
    } else {
        destination += " Europe";
    }

    if ((season === "winter") && (budget <= 1000)) {
        accommodation = "Hotel";
        switch (destination) {
            case "Somewhere in Bulgaria":
                budgetUsed = 0.7 * budget;
                break;
            case "Somewhere in Balkans":
                budgetUsed = 0.8 * budget;
                break;
        }

    }
    console.log(destination);
    console.log(`${accommodation} - ${budgetUsed.toFixed(2)}`);
}

solve([50, "summer"]);
solve([75, "winter"]);
solve([312, "summer"]);
solve([678.53, "winter"]);
solve([1500, "summer"]);

