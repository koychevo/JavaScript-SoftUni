function solve(input) {
    let pieces = Number(input.shift()) * Number(input.shift());
    let result = "";
    while (pieces > 0) {
        let command = input.shift();
        if (command === "STOP") { break; }
        pieces -= Number(command);
    }
    if(pieces < 0) {
        result = `No more cake left! You need ${-pieces} pieces more.`;
    } else {
        result = `${pieces} pieces are left.`;
    }
    console.log(result);
}

solve([10, 10, 20, 20, 20, 20, 21]);
solve([10, 2, 2, 4, 6, "STOP"]);
