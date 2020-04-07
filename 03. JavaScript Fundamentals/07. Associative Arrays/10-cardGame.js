function printPlayers(input) {
    let playersMap = new Map();

    for (let player of input) {
        let [name, cards] = player.split(': ');
        cards = cards.split(', ');
        let cardSet = new Set();
        if (playersMap.has(name)) {
            cardSet = playersMap.get(name);
        }
        for (let card of cards) {
            cardSet.add(card);
        }
        playersMap.set(name, cardSet);
    }

    let players = Array.from(playersMap.entries());

    for(let player of players) {
        let [name, cards] = player;
        cards = Array.from(cards.values());
        let sum = 0;
        for(let card of cards) {
            sum += calculateCardValue(card);
        }
        console.log(`${name}: ${sum}`);
    }

    function calculateCardValue(card) {
        let firstValue = lastValue = 0;
        let letters = card.split('');
        let [firstLetter, lastLetter] = letters;
        if(letters.length > 2) {
            firstLetter = letters[0] + letters[1];
            lastLetter = letters[letters.length-1];
        }
       
        switch (firstLetter) {
            case 'J':
                firstValue = 11;
                break;
            case 'Q':
                firstValue = 12;
                break;
            case 'K':
                firstValue = 13;
                break;
            case 'A':
                firstValue = 14;
                break;
            default:
                firstValue = Number(firstLetter);
                break;
        }

        switch (lastLetter) {
            case 'S':
                lastValue = 4;
                break;
            case 'H':
                lastValue = 3;
                break;
            case 'D':
                lastValue = 2;
                break;
            case 'C':
                lastValue = 1;
                break;
        }
        return firstValue * lastValue;
    }
}

printPlayers([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

/*
Task: You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}
*/

