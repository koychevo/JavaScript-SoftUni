function solve(input) {
    let steps = 0;
    let result = "";
    while(steps < 10000) {
        let command = input.shift();
        if(command === "Going home") {
            steps += Number(input.shift());
            break;
        }
        steps += Number(command);
    }
    if(steps < 10000) {
        result = `${10000 - steps} more steps to reach goal.`;
    } else {
        result = "Goal reached! Good job!";
    }
    console.log(result);
}

solve([1000, 1500, 2000, 6500]);
solve([1500, 300, 2500, 3000, "Going home", 200]);
solve([1500, 3000, 250, 1548, 2000, "Going home", 2000]);
solve([125, 250, 4000, 30, 2678, 4682]);