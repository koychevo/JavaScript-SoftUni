function solve(input){
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let speed = Number(input.shift());
    let waterOpposition = Math.floor(distance / 15) * 12.5;
    let time = distance * speed + waterOpposition;
    let difference = record - time;
    let result = "";
    if(difference <= 0) {
        result = `No, he failed! He was ${Math.abs(difference).toFixed(2)} seconds slower.`;
    } else {
        result = `Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`;
    }
    console.log(result);
}

solve([10464, 1500, 20]);
solve([55555.67, 3017, 5.03]);
