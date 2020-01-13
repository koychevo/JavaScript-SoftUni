function solve(input) {
    let name = input.shift();
    let counter = 0;
    let notes = 0;
    while(counter < 12) {
        let grade = Number(input.shift());
        notes += grade;
        counter++;
    }
    let average = (notes / 12).toFixed(2);
    console.log(`${name} graduated. Average grade: ${average}`);
}

solve(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
solve(["Ani", 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6]);