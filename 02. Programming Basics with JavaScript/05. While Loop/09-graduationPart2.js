function solve(input) {
    let name = input.shift();
    let notes = 0;
    let counter = 0;
    let isExcluded = false;
    let failed = 0;
    while(counter < 12) {
        let grade = Number(input.shift());
        if(grade < 4) {
            failed++;
        }
        if(failed > 1) {
            isExcluded = true;
            break;
        }
        notes += grade;
        counter++;
    }
    if(isExcluded) {
        console.log(`${name} has been excluded at ${counter} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(notes / 12).toFixed(2)}`);
    }
}

solve(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
solve(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]);
