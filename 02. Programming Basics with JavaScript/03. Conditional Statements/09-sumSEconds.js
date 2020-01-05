function solve(input) {
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());
    let time = firstTime + secondTime + thirdTime;
    let mins = Math.trunc(time / 60);
    let secs = time % 60;
    if(secs < 10) {
        secs = "0" + secs;
    }
    console.log(`${mins}:${secs}`);
}

solve([35, 45, 44]);
solve([22, 7, 34]);
solve([50, 50, 49]);
solve([14, 12, 10]);
