const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const Card = class Card {
    isJoker = false;
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    toString() {
        return this.value + ' of ' + this.suit;
    }

    compareTo(otherCard) {
        if(otherCard){
            return this.isJoker || otherCard.isJoker || 
            (this.value === otherCard.value && this.suit !== otherCard.suit);
        }
        return false
    }
}

const Joker = class Joker extends Card {
    constructor() {
        super('Joker', 'Joker');
        this.isJoker = true;
    }
}

module.exports = {
    Card,
    Joker,
    suits,
    values
}