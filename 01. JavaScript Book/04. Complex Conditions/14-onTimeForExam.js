function solve(input) {
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arrivalHour = Number(input.shift());
    let arrivalMinutes = Number(input.shift());

    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    let arrival = "Late";
    let timeDifference = examTime - arrivalTime;

    if ((timeDifference >= 0) && (timeDifference <= 30)) {
        arrival = "On time";
    } else if (timeDifference > 30) {
        arrival = "Early";
    }
    let result = "";
    if(timeDifference != 0) {
        let hoursDifference = Math.trunc(Math.abs(timeDifference / 60));
        let minutesDifference = Math.abs(timeDifference % 60);
        
        if(hoursDifference > 0) {
            minutesDifference = minutesDifference < 10 ? "0" + minutesDifference : minutesDifference;
            result += hoursDifference + ":" + minutesDifference + " hours"; 
        } else {
            result += minutesDifference + " minutes";
        }
        if(arrival === "Early" || arrival === "On time") {
            result += " before the start";
        } else {
            result += " after the start";
        }
    }
    console.log(arrival);
    console.log(result);
}

solve([9, 0, 8, 30]);
/*
solve([9, 30, 9, 50]);
solve(["16", "00", "15", "00"]);
solve(["9", "00", "8", "30"]);
solve(["9", "00", "10", "30"]);
solve(["14", "00", "13", "55"]);
solve([11, 30, 8, 12]);
solve(["10", "00", "10", "00"]);
solve([11, 30, 10, 55]);
solve([11, 30, 12, 29]);
*/