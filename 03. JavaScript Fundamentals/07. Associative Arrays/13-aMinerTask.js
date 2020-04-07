function printResources(input) {
    let resources = new Map();
    for(let i = 0; i < input.length - 1; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);
        if(resources.has(resource)) {
            quantity += resources.get(resource);
        }
        resources.set(resource, quantity);
    }
    Array.from(resources.entries()).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}

printResources(['Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]);

printResources(['gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]);

/*
Task: You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000]
*/