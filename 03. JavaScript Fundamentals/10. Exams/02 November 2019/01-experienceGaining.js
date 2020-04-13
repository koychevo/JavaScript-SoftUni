function solve(input) {
    input = input.map(el => Number(el));
    let experienceNeeded = input.shift();
    let battlesCount = input.shift();
    let experience = 0;
    
    for(let i = 1; i <= battlesCount; i++) {
        let points = input.shift();
        if(i % 3 === 0) {
            points *= 1.15;
        }
        if(i % 5 === 0) {
            points *= 0.9;
        }
        experience += points;
        if(experience >= experienceNeeded) {
            return `Player successfully collected his needed experience for ${i} battles.`;
        } 
    }
    return `Player was not able to collect the needed experience, ${(experienceNeeded - experience).toFixed(2)} more needed.`;
    
}

console.log(solve([500, 5, 50, 100, 200, 100, 30]));
console.log(solve([500, 5, 50, 100, 200, 100, 20]));
console.log(solve([400, 5, 50, 100, 200, 100, 20]));

/*
Task: function solve(input) {
    input = input.map(el => Number(el));
    let experienceNeeded = input.shift();
    let battlesCount = input.shift();
    let experience = 0;
    
    for(let i = 1; i <= battlesCount; i++) {
        let points = input.shift();
        if(i % 3 === 0) {
            points *= 1.15;
        }
        if(i % 5 === 0) {
            points *= 0.9;
        }
        experience += points;
        if(experience >= experienceNeeded) {
            return `Player successfully collected his needed experience for ${i} battles.`;
        } 
    }
    return `Player was not able to collect the needed experience, ${(experienceNeeded - experience).toFixed(2)} more needed.`;
    
}
*/
