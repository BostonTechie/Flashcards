class deck {
    constructor(nameDeck){
        // why is my uppercase not working?
        this.nameDeck = nameDeck.charAt(0).toUpperCase() + nameDeck.slice(1)
        this.cards = []
    }
    
    addCard (card){
        this.cards.push(card)
    }
      
}


const javaDeck = new deck ('javascript')
javaDeck.addCard(card1)
javaDeck.addCard(card2)
javaDeck.addCard(card3)
javaDeck.addCard(card4)
javaDeck.addCard(card5)

// javaDeck.cards.forEach( (card)=> {addCard(card)})


console.log(javaDeck);

javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

