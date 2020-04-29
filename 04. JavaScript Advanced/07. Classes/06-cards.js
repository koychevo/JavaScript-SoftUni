let result =(function(){

    let Suits = { 
        CLUBS: "\u2663",    
        DIAMONDS: "\u2666",   
        HEARTS: "\u2665",    
        SPADES: "\u2660"
    }; 

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face () {
            return this.innerFace;
        }

        set face(f) {
            if(!faces.includes(f)) {
                throw new Error("Invalid card face: " + f);
            }
            this.innerFace = f;
        }

        get suit() {
            return this.innerSuit;
        }

        set suit(s) {
            if(!Object.values(Suits).includes(s)) {
                throw new Error("Invalid card suit: " + s);
            }
            this.innerSuit = s;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}())


let Suits = result.Suits;
let Card = result.Card;

let card = new Card('2', Suits.CLUBS);
console.log(card)
card.suit = Suits.DIAMONDS;
card.face = 'A';
console.log(card)

/*
Task: You need to write an IIFE that results in an object containing two properties Card which is a class and Suits which is an object that will hold the possible suits for the cards.
The Suits object should have exactly these 4 properties:
•	SPADES: ♠
•	HEARTS: ♥
•	DIAMONDS: ♦
•	CLUBS: ♣
Where the key is SPADES, HEARTS e.t.c. and the value is the actual symbol ♠, ♥ and so on.
The Card class should allow for creating cards, each card has 2 properties face and suit. The valid faces are the following ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] any other are considered invalid.
The Card class should have setters and getters for the face and suit properties, when creating a card or setting a property validations should be performed, if an invalid face or a suit not in the Suits object is passed an Error should be thrown.
Code Template
You are required to write and submit an IIFE which results in an object containing the above-mentioned Card and Suits as properties. Here is an example template you can use: 
(function(){

    // TODO: 

    return {
        Suits:Suits,
        Card:Card
    }
}())
*/
