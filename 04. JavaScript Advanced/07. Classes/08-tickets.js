function sortTickets(tickets, criterion) {
    let sortedTickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of tickets) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        sortedTickets.push(ticket);
    }

    sortedTickets.sort((a, b) => {
        let first = a[criterion];
        let second = b[criterion];
        if (typeof (first) === 'number' && typeof (second) === 0) {
            return b - a;
        }
        if (second > first) {
            return -1;
        }
        if (second > first) {
            return 1;
        }
        return 0;
    });

    return sortedTickets;
}

console.log(sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
console.log(sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

/*
Task: Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. The ticket descriptions have the following format:
<destinationName>|<price>|<status>
Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price or status, depending on the second parameter that your program received. Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.
Input
Your program will receive two parameters - an array of strings and a single string.
Output
Return a sorted array of all the tickets that where registered.
*/

