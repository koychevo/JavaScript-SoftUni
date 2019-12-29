function solve([arg1, arg2, arg3]) {
    let sumSeconds = parseInt(arg1) +parseInt(arg2) + parseInt(arg3);
    let minutes = Math.trunc(sumSeconds / 60);
    let seconds = sumSeconds % 60;
    if(Math.trunc(seconds / 10) === 0) {
        seconds = '0' + seconds;
    }
    console.log(`${minutes}:${seconds}`);
}

solve([35, 45, 44]);
solve([22, 7, 34]);
solve([50, 50, 49]);
solve([14, 12, 10]);
