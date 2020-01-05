function solve(input) {
    let speed = Number(input.shift());
    let result = "";
    if(speed <= 10) {
        result = "slow";
    } else if(speed <= 50) {
        result = "average";
    } else if(speed <= 150) {
        result = "fast";
    } else if(speed <= 1000) {
        result = "ultra fast";
    } else {
        result = "extremely fast";
    }
    console.log(result);
}

solve([8]);
solve([49.5]);
solve([126]);
solve([160]);
solve([3500]);
