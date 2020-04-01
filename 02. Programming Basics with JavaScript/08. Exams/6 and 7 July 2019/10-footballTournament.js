function solve(input) {
    let team = input.shift();
    let games = Number(input.shift());
    if(games < 1) {
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }
    let wins = loses = equals = 0;
    let points = 0;
    for (let i = 0; i < games; i++) {
        let game = input.shift();
        switch (game) {
            case 'W':
                wins++;
                points += 3;
                break;
            case 'D':
                equals++;
                points += 1;
                break;
            case 'L':
                loses++;
                break;
        }
    }
    console.log(`${team} has won ${points} points during this season.`);
    console.log('Total stats:');
    console.log(`## W: ${wins}`);
    console.log(`## D: ${equals}`);
    console.log(`## L: ${loses}`);
    console.log(`Win rate: ${(wins / games * 100).toFixed(2)}%`);
}

solve(['Liverpool', 10, 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W']);
solve(['Barcelona', 7,'W', 'D', 'L', 'L', 'W', 'W', 'D']);
solve(['Chelsea', 0]);
