function determinePerson(age) {
    let person = "out of bounds";
    if(age >= 0 && age <= 2) {
        person = "baby";
    } else if(age >= 3 && age <= 13) {
        person = "child";
    } else if(age >= 14 && age <= 19) {
        person = "teenager";
    } else if(age >= 20 && age <= 65) {
        person = "adult";
    } else if(age >= 66) {
        person = "elder";
    }
    console.log(person);
}

determinePerson(20);
determinePerson(1);
determinePerson(100);

/*
Task: Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:
•	0-2 – baby; 
•	3-13 – child; 
•	14-19 – teenager;
•	20-65 – adult;
•	>=66 – elder; 
•	In all other cases - out of bounds
•	All the values are inclusive.
*/
