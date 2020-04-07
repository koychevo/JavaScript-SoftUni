function printStudents(input) {
    let students = new Map();

    for(let line of input) {
        line = line.split(' ');
        let student = line[0];
        let grades = line.slice(1);
        let oldGrades = [];
        if(students.has(student)) {
            oldGrades = students.get(student);
        } 
        students.set(student, oldGrades.concat(grades));
    }

    let sorted = Array.from(students.entries()).sort((a, b) => averageGrades(a, b));
    
    for(let student of sorted) {
        let [name, grades] = student;
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function averageGrades(first, second) {
        return calculateAverageGrade(first) - calculateAverageGrade(second);
    }

    function calculateAverageGrade(arr) {
        let sum = 0;
        for(let grade of arr[1]) {
            sum += Number(grade);
        }
        return sum / arr[1].length;
    }
}

printStudents(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);

/*
Task: Write a function to store students with all of their grades. If a student appears more than once, add the new grades. At the end print the students sorted by average grade. The input comes as array of strings.
*/
