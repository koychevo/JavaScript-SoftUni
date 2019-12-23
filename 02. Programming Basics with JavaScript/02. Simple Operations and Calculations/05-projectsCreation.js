function solve(input) {
    let architect =input.shift();
    let projects = parseInt(input.shift());
    console.log(`The architect ${architect} will need ${3 * projects} hours to complete ${projects} project/s.`);
}

solve(["George", 4]);
solve(["Sanya", 9]);
