function solve(input) {
    let examTime = Number(input.shift()) * 60 + Number(input.shift());
    let arrivalTime = Number(input.shift()) * 60 + Number(input.shift());
    let difference = examTime - arrivalTime;
    let time = "";
    let mins = 0;
    let hours = 0;
    let result = "";
    if(difference < 0) {
        time = "Late";
    } else if(difference <= 30) {
        time = "On time";
    } else {
        time = "Early"
    }
    if(difference !== 0) {
        difference = Math.abs(difference);
        mins = difference % 60;
        hours = Math.trunc(difference / 60);
        mins = (hours > 0 && mins < 10) ? "0" + mins : mins;
        result = (hours > 0) ? `${hours}:${mins} hours` : `${mins} minutes`;  
        if(time === "Late") {
            result += " after the start"; 
        } else {
            result += " before the start";
        }
    }

    console.log(time);
    console.log(result);
}

solve([9, 30,9, 50]);
solve(["9","00", "8", "30"]);
solve(["16", "00", "15", "00"]);
solve([11, 30, 8, 12]);
solve([11, 30, 12, 29]);
