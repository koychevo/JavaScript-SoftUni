function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let high = Number(input.shift());
    let totalSpace = width * length * high;
    let freeSpace = totalSpace;
    while(freeSpace >= 0) {
        let boxes = input.shift();
        if(boxes === "Done") {
            break;
        }
        freeSpace = freeSpace - 1 * boxes;
    }

    if(freeSpace < 0) {
        console.log(`No more free space! You need ${-freeSpace} Cubic meters more.`);
    } else {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

solve([10, 10, 2, 20, 20, 20, 20, 122]);
solve([10, 1, 2, 4, 6, "Done"]);
