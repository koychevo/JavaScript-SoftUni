function solve(input) {
    let games = Number(input.shift());
    let hearthstone = fornite = overwatch = others = 0;

    for (let i = 0; i < games; i++) {
        game = input.shift();
        switch (game) {
            case 'Hearthstone':
                hearthstone++;
                break;
            case 'Fornite':
                fornite++;
                break;
            case 'Overwatch':
                overwatch++;
                break;
            default:
                others++;
                break;
        }
    }
    console.log(`Hearthstone - ${(hearthstone / games * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / games * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / games * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / games * 100).toFixed(2)}%`);
}

solve([4, 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
solve([3, 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
