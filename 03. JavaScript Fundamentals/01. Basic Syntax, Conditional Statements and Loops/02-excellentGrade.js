function showGrade(note) {
    let result = "Not excellent";
    if(note >= 5.50) {
        result = "Excellent";
    }
    console.log(result);
}

showGrade(5.50);
showGrade(4.35);


/*
Task: Write a function that receives a single number and checks if the grade is excellent or not. 
If it is, print "Excellent", otherwise print "Not excellent"
*/