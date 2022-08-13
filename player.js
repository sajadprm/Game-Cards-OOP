const GameTable=require("./gameTable");
const Player=class Player{
    constructor(name)
    {
        this.name=name;
        this.gameTable=new GameTable();
        this.seenCards=new Set();
    }

    play(){
        console.log(`${this.name} is Playing...`);
         while(!this.gameTable.gameOver)
         {
             let index=Math.floor(Math.random() * 54);

            
             
             if(this.gameTable.openCard)
             {
                const _index = this.gameTable.deck.cards.indexOf(this.gameTable.openCard)
                if ( _index === index) continue;

                const foundCard = Array.from(this.seenCards).find(seenCard => {
                    return seenCard.card.compareTo(this.gameTable.openCard)
                });
                     

                if(foundCard)
                {
                    index = foundCard.index;
                    this.seenCards.delete(foundCard);
                }
            }

                const card=this.gameTable.pickCard(index);
                if(card && !card.success)
                {
                    this.seenCards.add({index,card:card.card})
                }

                console.log(`${this.gameTable.remainedCards.length} and cards Left :`);
                this.gameTable.remainedCards.forEach((card)=>console.log(card));

             
        }
       
     
    }
 }


module.exports=Player   
