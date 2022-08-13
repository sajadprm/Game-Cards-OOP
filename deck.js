const card = require("./card");

module.exports.Deck=class Deck {
    constructor() {
        this.cards = [];

        for (let suit = 0; suit < card.suits.length; suit++) {
            for (let value = 0; value < card.values.length; value++) {
                this.cards.push(new card.Card(card.suits[suit], card.values[value]))
            }
        }
        for (let i = 0; i < 2; i++) {
            this.cards.push(new card.Joker())
        }
    }

    //   cards() {
    //     return this.cards;
    // }


    get length(){
       return this.cards.filter(card=>card).length;
    }

   get isEmpty(){
        return this.length===0
    }


    shuffle() {
         this.cards = this.cards.sort(() => Math.random() - 0.5)
    }

    removeCard(indices) {
        this.cards = this.cards.map((card, index) => {
            return indices.indexOf(index) === -1 ? card : null;
        })
    }

    

}


