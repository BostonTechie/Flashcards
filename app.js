

//index to allow for the next button to flip through all available cards
let i = 0
let j = 1

//index to allow for the next button to store all memorized cards
let gotItCount = 0

//boolean to toggle between front and back of card
let cardToggle = true

//track if the user got an answer correct or not so they can go over ones they missed
let gotItTracking =[]


class deck {
    constructor(deck){
        
        this.deck = deck.charAt(0).toUpperCase() + deck.slice(1)
        this.cards = []
    }
    
    addCard (card){
        this.cards.push(card)
    }
  
    nextCard(){
      if (this.cards[i].memorized === true){
     // start here tomorrow     
     // find index store it as a variable then display that
     //console.log(this.cards.memorized.findIndex(memory => memory === false))
     console.log(`found a true ${i}`)
       }
       
        if ( (i+1) === this.cards.length){
            window.alert('Congrats you reached the end of the deck, restart until you got them all memorized!!')
            $('#flashCard').text(this.cards[0].frontCard)
            console.log(`here is i ${i}`);
            console.log(`here is j ${j}`); 
            i = 0
            j = 1
        }
        
        else {
            i = ++i
            $('#flashCard').text(this.cards[i].frontCard)    
            j = i+1    
            console.log(`here is i ${i}`);
            console.log(`here is j ${j}`); 
        } 
    }

    flipCard (){
        if (cardToggle === true){
            $('#flashCard').text(this.cards[i].backCard)
            cardToggle = false
        }
        else if (cardToggle === false){
            $('#flashCard').text(this.cards[i].frontCard)
            cardToggle = true
        }
    }
    
    // function when user has memorized card and log it as such, this causes the "nextCard" function to ignore card on next 'go around'
    gotIt(){
        
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

console.log(`here is i ${i}`);
console.log(`here is j ${j}`);

// javaDeck.cards.forEach( card=> console.log('here is your front of card ',card.frontCard,'and here is your back of card ',card.backCard))

// javaDeck.cards.forEach( (card)=> {addCard(card)})

// console.log(javaDeck)