

//index to allow for the next button to flip through all available cards
let i = 0

//boolean to toggle between front and back of card
let cardToggle = true

//track if the user got an answer correct or not so they can go over ones they missed
let gotItTracking =[]


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
       
        if ( (i+1) === this.cards.length){
            window.alert('Congrats you reached the end of the deck!!')
            $('#flashCard').text(this.cards[0].frontCard)
            i = 0
        }
        
        else {
            i = ++i
            $('#flashCard').text(this.cards[i].frontCard)          
        }
    }

    flipCard (javaDeck){
        if (cardToggle === true){
            $('#flashCard').text(this.cards[i].backCard)
            cardToggle = false
        }
        else if (cardToggle === false){
            $('#flashCard').text(this.cards[i].frontCard)
            cardToggle = true
        }
    }
    
}

const javaDeck = new deck ('javascript')


javaDeck.addCard(card1)
javaDeck.addCard(card2)
javaDeck.addCard(card3)
javaDeck.addCard(card4)
javaDeck.addCard(card5)


// javaDeck.cards.forEach( (card)=> {addCard(card)})


// set initial text to your first card
$('#flashCard').text(javaDeck.cards[0].frontCard)

$('#flipCard').on('click',()=> javaDeck.flipCard())
$('#nextCard').on('click',()=> javaDeck.nextCard())

//https://www.youtube.com/watch?v=9NzKTSLceTc
// https://keycode.info/
//37 left arrow 39 right arrow

$(document).on('keydown',(e)=> {
    if(e.keyCode === 39) { javaDeck.nextCard()}
})


// push the length of the cards into a array for tracking if user got it right or not
javaDeck.cards.forEach( card=> gotItTracking.push(false))


// javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

// console.log(javaDeck)