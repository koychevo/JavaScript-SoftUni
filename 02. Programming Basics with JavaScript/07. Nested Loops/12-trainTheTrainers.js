function solve(input) {
    let n = Number(input.shift());
    let projectName = input.shift();
    let projectCounter = 0;
    let projectNotes = 0;
    while(projectName !== "Finish") {
        projectCounter++;
        let notes = 0;
        for(let i = 0; i < n; i++) {
            notes += Number(input.shift());
        }
        let averageNote = notes / n;
        projectNotes += averageNote;
        console.log(`${projectName} - ${averageNote.toFixed(2)}.`);
        projectName = input.shift();
    }
    console.log(`Student's final assessment is ${(projectNotes / projectCounter).toFixed(2)}.`);
}

solve([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);
solve([3, "Arrays", 4.53, 5.23, 5.00, "Lists", 5.83, 6.00, 5.42, "Finish"]);
solve([2, "Objects and Classes", 5.77, 4.23, "Dictionaries", 4.62, 5.02, "RegEx", 2.88, 3.42, "Finish"]);
