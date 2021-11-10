class deck {
    constructor(nameDeck){
        // why is my uppercase not working?
        this.nameDeck = nameDeck.charAt(0).toUpperCase() + nameDeck.slice(1)
        this.cards = []
    }
    
    addCard (card){
        this.cards.push(card)
    }
  
    nextCard(javaDeck){
       

        //why isn't this working?
        if ((i-2) >= this.cards.length){
            window.alert('Congrats you reached the end of the deck')
        }
        
        else {
            i = ++i
            $flashCard.text(this.cards[i].frontCard)
            
        }
    }

    flipCard (javaDeck){
         console.log(this.cards[0].frontCard)
    }
    
}


const javaDeck = new deck ('javascript')
javaDeck.addCard(card1)
javaDeck.addCard(card2)
javaDeck.addCard(card3)
javaDeck.addCard(card4)
javaDeck.addCard(card5)

// javaDeck.cards.forEach( (card)=> {addCard(card)})

let $flashCard =  $('#flashCard')
let i = 0


$flashCard.text(javaDeck.cards[0].frontCard)



$('#flipCard').on('click',()=> javaDeck.flipCard())
$('#nextCard').on('click',()=> javaDeck.nextCard())


// javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

// console.log(javaDeck)