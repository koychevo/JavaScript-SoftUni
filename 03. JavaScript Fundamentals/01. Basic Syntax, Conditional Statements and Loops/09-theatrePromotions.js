function ticketPrice(dayType ,age) {
    let ticketPrice = "Error!";
    age = Number(age);
    if(dayType === "Holiday" && age >= 0 && age <= 18) {
        ticketPrice = "5$";
    }
    if(dayType === "Holiday" && age > 64 && age <= 122) {
        ticketPrice = "10$";
    }
    if((dayType === "Weekday" && ((age >= 0 && age <= 18) || (age > 64 && age <= 122))) || (dayType === "Holiday" && age > 18 && age <= 64)) {
        ticketPrice = "12$";
    }
    if(dayType === "Weekend" && (age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
        ticketPrice = "18$";
    }
    if(dayType === "Weekday" && age > 18 && age <= 64) {
        ticketPrice = "18$";
    }
    if(dayType === "Weekend" && age > 18 && age <= 64) {
        ticketPrice = "20$";
    }
    console.log(ticketPrice);
}

ticketPrice('Weekday', 42);
ticketPrice('Holiday', -12);
ticketPrice('Holiday', 15);

/*
Task: A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
Weekday	            12$	            18$	            12$
Weekend	            15$	            20$	            15$
Holiday	            5$	            12$	            10$
*/