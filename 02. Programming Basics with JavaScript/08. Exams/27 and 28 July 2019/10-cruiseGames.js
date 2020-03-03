function solve(input) {
    let gamer = input.shift();
    let games = Number(input.shift());
    let volleyballGames = tennisGames = badmintonGames = 0;
    let volleyballPoints = tennisPoints = badmintonPoints = 0;
    while(games > 0) {
        let gameType = input.shift();
        let points = Number(input.shift());
        if(gameType === "volleyball") {
            volleyballGames++;
            volleyballPoints += 1.07 * points;
        }
        if(gameType === "tennis") {
            tennisGames++;
            tennisPoints += 1.05 * points;
        }
        if(gameType === "badminton") {
            badmintonGames++;
            badmintonPoints += 1.02 * points;
        }
        games--;
    }
    let volleyballAvgPoints = volleyballPoints / volleyballGames;
    let tennisAvgPoints = tennisPoints / tennisGames;
    let badmintonAvgPoints = badmintonPoints / badmintonGames;
    let totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);
    if((volleyballAvgPoints >= 75) && (tennisAvgPoints >= 75) && (badmintonAvgPoints >= 75)) {
        console.log(`Congratulations, ${gamer}! You won the cruise games with ${totalPoints} points.`);
        
    } else {
        console.log(`Sorry, ${gamer}, you lost. Your points are only ${totalPoints}.`);
    }
}

solve(["Pepi", 3, "volleyball", 78, "tennis", 98, "badminton", 105]);
solve(["Annie", 5, "badminton", 34, "tennis", 76, "badminton", 10, "volleyball", 62, "badminton", 56]);
solve(["Ivan", 7, "volleyball", 70, "tennis", 100, "badminton", 64, "badminton", 125, "tennis", 62, "tennis", 72, "badminton", 87]);
