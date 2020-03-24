function solve(days) {
    let goldPrice = 67.51;
    let biotcoinPrise = 11949.16;
    let firstDay = '';
    let money = 0;
    for(let i = 0; i < days.length; i++) {
        if((i+1) % 3 === 0) {
            days[i] = 0.7 * days[i]
        }
        money += goldPrice * days[i];
        if(money >= biotcoinPrise && !firstDay) {
            firstDay = i + 1;
        }
    }
    let bitcoins = Math.trunc(money / biotcoinPrise);
    let moneyLeft = money - bitcoins * biotcoinPrise;
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstDay) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

solve([100,200,300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);

/*
Task: Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. For the different exchanges use these prices:
1 Bitcoin	11949.16 lv.
1 g of gold	67.51 lv.

Input
You will receive an array of numbers, representing your shift at the mine.
Output
Print on the console these lines in the following formats:
•	First line prints the total amount of bought bitcoins:
 "Bought bitcoins: {count}"
•	Second line prints which day you bought your first bitcoin: 
 "Day of the first purchased bitcoin: {day}"
In case you did not purchased any bitcoins, do not print the second line.
•	Third line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
 "Left money: {money} lv."
Constraints
•	The input array may contain up to 1,000 elements
•	The numbers in the array are in range [0.01..5,000.00] inclusive
•	Allowed time/memory: 100ms/16MB
*/
