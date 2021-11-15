// Following flashcard made by Andrew Urquhart on 11/15/2021

//index tracking to allow for the next button to flip through all available cards
let i = 0

//index to allow for the next button to store all memorized cards
let gotItCount = 0

//boolean to toggle between front and back of card
let cardToggle = true
let gotItToggle = false


class deck {
    constructor(deck){
        
        this.deck = deck.charAt(0).toUpperCase() + deck.slice(1)
        this.cards = []
        this.memorizedCard = []
    }
    
  
    addCard (card){
        this.cards.push(card)
    }
  
    nextCard(){
     
        gotItToggle = false

      if ( (i+1) === this.cards.length || i >= this.cards.length){  
            $('#flashCard').text(this.cards[0].frontCard)
            i = 0

            if (1 >=  this.cards.length ){
                window.alert('Congrats you reached the end of the deck, restart if you want to start all over again!!')

                //display final card upon reaching the end of the deck
                $('#flashCard').text(this.cards[0].frontCard)
              
            }
        }
        
        else {
             ++i
            $('#flashCard').text(this.cards[i].frontCard)      
        } 
    }

    flipCard (){
        if (cardToggle === true){
            $('#flashCard').text(this.cards[i].backCard)
            cardToggle = false
            $('#front').text('Back of Card')
        }
        else if (cardToggle === false){
            $('#flashCard').text(this.cards[i].frontCard)
            cardToggle = true
            $('#front').text('Front of Card')
        }
    }
    
    //  when user has memorized card the following function can log it as such, this causes the that card to be spliced from the array and added to a memorized array. Webpage is updated with tracking of how the user is progressing through the deck
    gotIt(){
        
        if (gotItToggle === true){
            window.alert('You already memorized this card please click on the next card button')
        }
        else {
            gotItCount = ++gotItCount
            this.cards[i].memorized = true
            $('#gotItScore').text(`Got it memorized: ${gotItCount}`)
            this.memorizedCard.push(this.cards.splice(i,1))
            gotItToggle = true
           $('#deckCount').text('Cards left to memorize: '+ this.cards.length)
        }
    }

    //function to reload the page thus resetting the deck and all the memorized cards
    reset(){
        location.reload()
        console.log('hello');
    }
}

const javaDeck = new deck ('javascript')


javaDeck.addCard(card1)
javaDeck.addCard(card2)
javaDeck.addCard(card3)
javaDeck.addCard(card4)
javaDeck.addCard(card5)

// Display the initial deck length whatever it may be not dynamic at the moment
$('#deckCount').text('Cards left to memorize: '+ javaDeck.cards.length)


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


//https://www.w3schools.com/jsref/met_loc_reload.asp
$('#reset').on('click',()=> javaDeck.reset())

// push the length of the cards into a array for tracking if user got it right or not
for( const element of javaDeck.cards){
    element.memorized = false
}



// javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

// javaDeck.cards.forEach( (card)=> {addCard(card)})
