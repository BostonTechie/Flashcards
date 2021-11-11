

//index to allow for the next button to flip through all available cards
let i = 0

//index to allow for the next button to store all memorized cards
let gotItCount = 0

//boolean to toggle between front and back of card
let cardToggle = true

//track if the user got an answer correct or not so they can go over ones they missed
let gotItTracking =[]


class deck {
    constructor(nameDeck){
        
        this.nameDeck = nameDeck.charAt(0).toUpperCase() + nameDeck.slice(1)
        this.cards = []
    }
    
    addCard (card){
        this.cards.push(card)
    }
  
    nextCard(javaDeck){
       
        if ( (i+1) === this.cards.length){
            window.alert('Congrats you reached the end of the deck, restart until you got them all memorized!!')
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
    
    gotIt(javaDeck){
        
        if (this.cards[i].memorized === true){
            window.alert('You already memorized this card go to the next card')
        }
        else {
        gotItCount = ++gotItCount
        this.cards[i].memorized = true
        $('#gotItScore').text(`Got it memorized: ${gotItCount}`)
        }
    }
}

const javaDeck = new deck ('javascript')


javaDeck.addCard(card1)
javaDeck.addCard(card2)
javaDeck.addCard(card3)
javaDeck.addCard(card4)
javaDeck.addCard(card5)

// set initial text to your first card
$('#flashCard').text(javaDeck.cards[0].frontCard)

// call function when user wants to flip a card to the answer side
$('#flipCard').on('click',()=> javaDeck.flipCard())

// call function when user wants to go to next card
    $('#nextCard').on('click',()=> javaDeck.nextCard())

    //https://www.youtube.com/watch?v=9NzKTSLceTc
    // https://keycode.info/
    //37 left arrow 39 right arrow
     // call function when user wants to go to next card with keyboard
    $(document).on('keydown',(e)=> {
    if(e.keyCode === 39) { javaDeck.nextCard()}
})

// call function when user had memorized card and want to remove it from deck
$('#gotItButton').on('click',()=> javaDeck.gotIt())


// push the length of the cards into a array for tracking if user got it right or not
for( const element of javaDeck.cards){
    element.memorized = false
}



// javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

// javaDeck.cards.forEach( (card)=> {addCard(card)})

// console.log(javaDeck)