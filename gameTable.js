const deck = require('./deck');

const GameTable = class GameTable {
    openIndex = -1;
    constructor() {
        this.deck = new deck.Deck();
        this.deck.shuffle();
    }

    pickCard(index) {
        let success = false;
        const card = this.deck.cards[index];
        if (!card || this.openIndex === index) return;

        if (this.openIndex !== -1 && this.deck.cards[index].compareTo(this.deck.cards[this.openIndex])) {
            console.log(`Pick ${this.deck.cards[index]} and ${this.deck.cards[this.openIndex]}`);
            this.deck.removeCard([this.openIndex, index]);
            this.openIndex = -1;
            success = true;
        }

        this.openIndex = this.openIndex === -1 ? index : -1;

        return {
            card,
            success
        };
    };

    get remainedCards() {
        return this.deck.cards.filter(card => card);
    }

    get gameOver() {
        return this.deck.length < 3;
    }

    get openCard() {
        return this.openIndex !== -1 ? this.deck.cards[this.openIndex] : null;
    }
}

module.exports = GameTable;