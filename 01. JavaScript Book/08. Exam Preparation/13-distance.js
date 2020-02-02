function solve(input) {
    let speed = Number(input.shift());
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());
    let firstDistance = speed * (firstTime / 60);
    speed *= 1.1;
    let secondDistance = speed * (secondTime / 60);
    speed *= 0.95;
    let thirdDistance = speed * (thirdTime / 60);
    let distance = firstDistance + secondDistance + thirdDistance;
    console.log(distance.toFixed(2));
}

solve([90, 60, 70, 80]);
solve([140, 112, 75, 190]);
