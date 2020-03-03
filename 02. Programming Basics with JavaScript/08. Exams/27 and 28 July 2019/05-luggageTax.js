function solve(input) {
    let width = Number(input.shift());
    let hеight = Number(input.shift());
    let length = Number(input.shift());
    let priority = Boolean(input.shift());
    let volume = width * hеight * length;
    let tax = 0;
    if(volume <= 50) {
        tax = 0;
    } else if(volume <= 100) {
        tax = priority === true ? 0 : 25;
    } else if(volume <= 200) {
        tax = priority  === true ? 10 : 50;
    } else if(volume <= 300) {
        tax = priority  === true ? 20 : 100;
    } 
    console.log(`Luggage tax: ${tax.toFixed(2)}`);
}

solve([2, 5, 3, "false"]);
solve([10, 5, 4, true]);
solve([5, 4, 3, true]);
solve([5, 7, 7, false]);
solve([10, 4, 5, true]);
