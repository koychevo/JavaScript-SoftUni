function solve(input) {
    let detegrent = Number(input.shift()) * 750;
    let turn = 0;
    let dishes = 0;
    let pots = 0;
    while(detegrent >= 0) {
        let command = input.shift();
        if(command === "End") {
            break;
        }
        turn++;
        command = Number(command);
        if(turn % 3 === 0) {
            pots += command;
            detegrent -= 15 * command;
        } else {
            dishes += command;
            detegrent -= 5 * command;
        }
    } 
    if (detegrent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detegrent} ml.`);
    } else {
        console.log(`Not enough detergent, ${-detegrent} ml. more necessary!`);
    }
}

solve([2, 53, 65, 55, "End"]);
solve([1, 10, 15, 10, 12, 13, 30]);
