function solve(arg1) {
    let points = parseInt(arg1);
    let bonus = 0;
    if(points % 2 === 0) {
        bonus += 1;
    }
    if(points % 10 === 5) {
        bonus += 2;
    }
    if(points <= 100) {
        bonus += 5;
    } else if (points <= 1000) {
        bonus += 0.2 * points;
    } else {
        bonus += 0.1 * points;
    }
    totalPoints = points + bonus;
    console.log(bonus);
    console.log(totalPoints);
}


solve(20);
solve(175);
solve(2703);
solve(15875);
