function solve(input) {
    let students = Number(input.shift());
    let failedStudents = averageStudents = goodStudents = topStudents = 0;
    let grade = 0;
    for (let i = 1; i <= students; i++) {
        let note = Number(input.shift());
        grade += note;
        if (note < 3) {
            failedStudents++;
        } else if (note < 4) {
            averageStudents++;
        } else if (note < 5) {
            goodStudents++;
        } else {
            topStudents++;
        }
    }
    console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(grade / students).toFixed(2)}`);
}

solve([10, 3, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);
solve([6, 2, 3, 4, 5, 6, 2.2]);
