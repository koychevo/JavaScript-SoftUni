function solve(input) {
    let movie = input.shift();;
    let studentTickets = standardTickets = kidTickets = 0;
    
    while(movie !== "Finish") {
        let freePlaces = Number(input.shift());
        let ticketCounter = 0;
        for(let i = 0; i < freePlaces; i++) {
            let ticket = input.shift();
           if(ticket === "End") {
                break;
            } else if(ticket === "student") {
                studentTickets++;
            } else if(ticket === "standard") {
                standardTickets++;
            } else if(ticket === "kid") {
                kidTickets++;
            }
            ticketCounter++;
        }
        console.log(`${movie} - ${(ticketCounter/freePlaces * 100).toFixed(2)}% full.`);
        movie = input.shift();
    }
    let allTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(studentTickets / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / allTickets * 100).toFixed(2)}% kids tickets.`);
}

solve(["Taxi", 10, "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", 6, "student", "student", "student", "student", "student", "student", "Finish"]);
solve(["The Matrix", 20, "student", "standard", "kid", "kid", "student", "student", "standart", "student", "End", "The Green Mile", 17, "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", 3, "standart", "standart", "standart", "Finish"]);
