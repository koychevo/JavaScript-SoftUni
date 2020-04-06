function showInventory(commands) {
    let inventory = commands.shift().split(' ');
    for(let command of commands) {
        let [operation, article] = command.split(' ');
        let currentArticle = article;
        if(operation === 'Upgrade') {
            let upgradeEquipment = article.split('-');
            article = upgradeEquipment[0];
            currentArticle = upgradeEquipment.join(':');
        }
        
        let index = inventory.indexOf(article);
        
        if(operation === 'Buy' && index === -1) {
            inventory.push(currentArticle);
        }

        if(operation === 'Trash' && index > -1) {
            inventory.splice(index, 1);
        }

        if(operation === 'Repair' && index > -1) {
            inventory.splice(index, 1);
            inventory.push(currentArticle);
        }

        if(operation === 'Upgrade' && index > -1) {
            inventory.splice(index+1, 0, currentArticle);
        }
    }
    return inventory.join(' ');
}

console.log(showInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']));
console.log(showInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']));

/*
Task: As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
•	Buy {equipment}
•	Trash {equipment}
•	Repair {equipment}
•	Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";
Input / Consrtaints
You will receive an array of strings. Each element of the array is a command.
•	In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by space.
Output
As output you must print Peter's inventory. 
*/
