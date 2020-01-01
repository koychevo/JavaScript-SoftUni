function solve(input) {
    let town = input.shift().toLowerCase();
    let commission = Number(input.shift());
    switch (town) {
        case "sofia":
            if(commission < 0) {
                console.log("error");    
            } else if(commission <= 500) {
                console.log((commission * 0.05).toFixed(2));    
            } else if(commission <= 1000) {
                console.log((commission * 0.07).toFixed(2));    
            } else if(commission <= 10000) {
                console.log((commission * 0.08).toFixed(2));    
            } else {
                console.log((commission * 0.12).toFixed(2));    
            }
            break;
        case "varna":
            if(commission < 0) {
                console.log("error");    
            } else if(commission <= 500) {
                console.log((commission * 0.045).toFixed(2));    
            } else if(commission <= 1000) {
                console.log((commission * 0.075).toFixed(2));    
            } else if(commission <= 10000) {
                console.log((commission * 0.1).toFixed(2));    
            } else {
                console.log((commission * 0.13).toFixed(2));    
            }
            break;
        case "plovdiv":
            if(commission < 0) {
                console.log("error");    
            } else if(commission <= 500) {
                console.log((commission * 0.055).toFixed(2));    
            } else if(commission <= 1000) {
                console.log((commission * 0.08).toFixed(2));    
            } else if(commission <= 10000) {
                console.log((commission * 0.12).toFixed(2));    
            } else {
                console.log((commission * 0.145).toFixed(2));    
            }
            break;
        default:
            console.log("error");
            break;
    }
}

solve(["Sofia", 1500]);
solve(["Plovdiv", 499.99]);
solve(["Kaspichan", -50]);
