function printCards(input) {
    let inputLines = input.slice();
    let cards = inputLines.shift().split(':');
    let deck = [];

    let line = inputLines.shift();
    while (line !== 'Ready') {
        let commands = line.split(' ');
        let operator = commands.shift();

        switch (operator) {
            case 'Add':
                if(cards.includes(commands[0])) {
                    deck.push(commands[0]);
                } else {
                    console.log('Card not found.');
                }
                break;
            case 'Insert':
                insertCard(commands[0], Number(commands[1]), deck, cards)
                break;
            case 'Remove':
                removeCard(commands[0], deck);
                break;
            case 'Swap':
                let firstCard = commands[0];
                let secondCard = commands[1];
                let firstIndex = deck.indexOf(firstCard);
                let secondIndex = deck.indexOf(secondCard);
                deck[firstIndex] = secondCard;
                deck[secondIndex] = firstCard;
                break;
            case 'Shuffle':
                shuffleDeck(deck);
                break;
        }

        line = inputLines.shift();
    }

    return deck.join(' ');

    function insertCard(card, index, arr, cardArr) {
        if(!cardArr.includes(card) || (index < 0 || index >= arr.length)) {
            console.log('Error!');
        } else {
            arr.splice(index, 0, card);
        }
    }

    function removeCard(card, arr) {
        let index = arr.indexOf(card);
        if(index > -1) {
            arr.splice(index, 1);
        } else {
            console.log('Card not found.');
        }
    }

    function shuffleDeck(arr) {
        let len = arr.length;
        for(let i = 0; i < len / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[len - 1 - i];
            arr[len - 1 - i] = temp;
        }
    }

}

console.log(printCards(['Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready']));
console.log(printCards(['Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready']));

/*
Task: The world is threatened by an enemy never seen before. Your hero's weapon seems to be useless against the enemy. But your hero has a super strong arsenal full of powerful magic cards and will challenge the enemy to a card duel to the death and he needs your help to create a deck. 
Create a program that adds, inserts, removes and swaps cards in a new deck. On the first line, you will receive all cards in the form of strings separated by ":". Until you receive the "Ready" command, you will get commands in the format:
•	Add {card name}
•	Adds the card to the end of the deck.
•	If the card doesn't exist in print "Card not found."
•	Insert {card name} {index}
•	Insert the card at the given index of the deck.
•	If the card doesn't exist or the index is invalid print "Error!"
•	Remove {card name} 
•	Remove the card from the deck.
•	If the card doesn't exist in print "Card not found."
•	Swap {card name 1} {card name 2} 
•	Swap the positions of the cards. 
•	Input will always be valid
•	Shuffle deck 
•	Reverse the deck
When you receive the "Ready" command print the cards in the deck separated by space.
Input
•	On the 1st line, you will receive the arsenal of all cards available separated by ":".
•	On the next lines, until you receive the "Ready" command you will receive commands to arrange your deck.
Output
•	Print the cards in your deck on a single line, separated by a single space.
*/
