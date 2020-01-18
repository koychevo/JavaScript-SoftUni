function solve(input) {
    let students = Number(input.shift());
    let topStudents = goodStudents = averageStudents = failedStudents = 0;
    let totalGrades = 0;
    for(let i = 0; i < students; i++) {
        let grade = Number(input.shift());
        totalGrades += grade;
        if(grade < 3) {
            failedStudents++;
        } else if(grade < 4) {
            averageStudents++;
        } else if(grade < 5) {
            goodStudents++;
        } else {
            topStudents++;
        }
    }
    console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrades / students).toFixed(2)}`);
}

solve([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5, 6, 2, 3, 4, 5, 6, 2.2]);
