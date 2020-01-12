function solve(input) {
    let season = input.shift().toLowerCase();
    let km = Number(input.shift());
    let priceProKm = 1.45;
    if (km <= 5000) {
        if (season === "spring" || season === "autumn") {
            priceProKm = 0.75
        } else if (season === "summer") {
            priceProKm = 0.9;
        } else if (season === "winter") {
            priceProKm = 1.05;
        }
    } else if (km <= 10000) {
        switch (season) {
            case "spring":
            case "autumn":
                priceProKm = 0.95;
                break;
            case "summer":
                priceProKm = 1.1;
                break;
            case "winter":
                priceProKm = 1.25;
                break;
        }
    }
    console.log((0.9 * 4 * km * priceProKm).toFixed(2));
}

solve(["Summer", 3455]);
solve(["Winter", 4350]);
solve(["Winter", 5678]);
solve(["Winter", 16042]);
solve(["Soring", 1600]);
solve(["Autumn", 8600]);
solve(["Spring", 16942]);
