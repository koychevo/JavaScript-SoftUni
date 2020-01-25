function solve(input) {
    let vacationCosts = Number(input.shift());
    let savings = Number(input.shift());
    let spendDays = 0;
    let days = 0;
    let result = '';
    while (savings < vacationCosts && spendDays < 5) {
        let command = input.shift().toLowerCase();
        let money = Number(input.shift());
        days++;
        if(command === "spend") {
            spendDays++;
            savings -= money;
            if(savings < 0) {
                savings = 0;
            }
        }
        if(command === "save") {
            spendDays = 0;
            savings += money;
        }
    }
    if(spendDays === 5) {
        result = `You can't save the money.\n${days}`;
    } else {
        result = `You saved the money for ${days} days.`;
    }
    console.log(result);
}

solve([2000, 1000, "spend", 1000, "save", 2000]);
solve([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10]);
solve([250, 150, "spend", 50, "spend", 50, "save", 100, "save", 100]);
