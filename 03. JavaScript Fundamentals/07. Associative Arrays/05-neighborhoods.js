function printNeighbours(input) {
    
    let neighbours = new Map();
    let people = input.slice(0);
    let streets = people.shift().split(', ');

    for(let street of streets) {
        neighbours.set(street, []);
    }

    for(let person of people) {
        let [street, name] = person.split(' - ');
        if(neighbours.has(street)) {
            neighbours.get(street).push(name);
        }
    }

    let sortedNeighbours = Array.from(neighbours.entries()).sort((a, b) => b[1].length - a[1].length);

    for(let neighborhood of sortedNeighbours) {
        let [street, people] = neighborhood;
        console.log(`${street}: ${people.length}`);
        for(let person of people) {
            console.log(`--${person}`);
        }
    }
}

printNeighbours(['Abbey Street, Herald Street, Bright Mews', 'Bright Mews - Garry', 'Bright Mews - Andrea', 'Invalid Street - Tommy', 'Abbey Street - Billy']);

/*
Task: Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will come as array of strings. The first element will be the list of neighborhoods separated by ", ". The rest of the elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}". Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. At the end print the neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format: 
"{neighborhood}: {inhabitants count}
--{1st inhabitant}
--{2nd inhabitant}
…"
*/
