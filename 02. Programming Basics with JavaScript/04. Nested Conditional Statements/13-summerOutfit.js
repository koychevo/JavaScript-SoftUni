function solve(input) {
    let degrees = Number(input.shift());
    let time = input.shift().toLowerCase();
    let outfit = "";
    let shoes = "";
    if((degrees >= 10 && degrees <= 18) && (time === "morning")) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
    }
    if(degrees >= 25 && time === "afternoon") {
        outfit = "Swim Suit";
        shoes = "Barefoot"; 
    }
    if((degrees > 18 && degrees <= 24 && time === "afternoon") || (degrees >= 25 && time === "morning")) {
        outfit = "T-Shirt";
        shoes = "Sandals";
    }
    if((degrees >= 10 && degrees <= 18 && (time === "afternoon" || time === "evening")) || (degrees > 18 && degrees <= 24 && (time === "morning" || time === "evening")) || (degrees >= 25 && time === "evening")) {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

solve([16, "Morning"]);
solve([22, "Afternoon"]);
solve([28, "Evening"]);
