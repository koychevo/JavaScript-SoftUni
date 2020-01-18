function solve(input) {
    let capacity = Number(input.shift());
    let visitors = Number(input.shift());
    let aCounter = bCounter = vCounter = gCounter = 0;
    for (let i = 0; i < visitors; i++) {
        let sector = input.shift().toLowerCase();
        switch (sector) {
            case "a":
                aCounter++;
                break;
            case "b":
                bCounter++;
                break;
            case "v":
                vCounter++;
                break;
            case "g":
                gCounter++;
                break;
        }
    }
    console.log((aCounter / visitors * 100).toFixed(2) + "%");
    console.log((bCounter / visitors * 100).toFixed(2) + "%");
    console.log((vCounter / visitors * 100).toFixed(2) + "%");
    console.log((gCounter / visitors * 100).toFixed(2) + "%");
    console.log((visitors / capacity* 100).toFixed(2) + "%");
}

solve([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
solve([93, 16, "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
solve([1000, 12, "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);
