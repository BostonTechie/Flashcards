class card {
    
    constructor (frontCard, backCard){
        this.frontCard = frontCard
        this.backCard = backCard
    }

}


const card1 = new card("What does HTML stand for?", "Hyper Text Markup Language");
const card2 = new card("The <h1> to <h6> elements do what?", "Creates heading text, with <h1> being the largest and <h6> the smallest.<h1> test" );
const card3 = new card("The <p> element does what??", "Creates a paragraph of text.");
const card4 = new card("The <ul> element does what?", "Begins an “unordered list” (e.g., bullets).");
const card5 = new card("The <li> element does what?", "Indicates each list item inside of a <ul>.");
