function showMonth(number) {
    let month = "";
    switch (number) {

        case (1):
            month = "January";
            break; 
        case (2):
            month = "February";
            break;
        case (3):
            month = "March";
            break;
        case (4):
            month = "April";
            break;
        case (5):
            month = "May";
            break;
        case (6):
            month = "June";
            break;
        case (7):
            month = "July";
            break;
        case (8):
            month = "August";
            break;
        case (9):
            month = "September";
            break;
        case (10):
            month = "October";
            break;
        case (11):
            month = "November";
            break;
        case (12):
            month = "December";
            break;
        default:
            month = "Error!";
            break;
    }
    console.log(month);
}

showMonth(2);
showMonth(13);

/*
Task: Write a program, which takes an integer from the console and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
*/
