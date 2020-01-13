function solve(input) {
    let badNotesLimit = Number(input.shift());
    let badNotes = 0;
    let notes = 0;
    let exams = 0;
    let lastExam = "";
    while (badNotes < badNotesLimit) {
        let currentExam = input.shift();
        if(currentExam === "Enough") {
            break;
        }
        let currentNote = Number(input.shift());
        if(currentNote <= 4) {
            badNotes++;
        }
        exams++;
        notes += currentNote;
        lastExam = currentExam;
    }
    if(badNotes === badNotesLimit) {
        console.log(`You need a break, ${badNotes} poor grades.`);
    } else {
        console.log(`Average score: ${(notes / exams).toFixed(2)}`);
        console.log(`Number of problems: ${exams}`);
        console.log(`Last problem: ${lastExam}`);
    }
}

solve([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"]);
solve([2, "Income", 3, "Game Info", 6, "Best Player", 4]);
