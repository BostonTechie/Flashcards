class card {
    
    constructor (frontCard, backCard){
        this.frontCard = frontCard
        this.backCard = backCard
    }

}


const card1 = new card("What does HTML stand for?", "Hyper Text Markup Language");
const card2 = new card("What do <h1> through <h6> do?", "Creates heading text, with <h1> being the largest and <h6> is the smallest" );
const card3 = new card("What does the <p> tag do??", "Creates a paragraph of text.");
const card4 = new card("The <ul> element does what?", "Begins an “unordered list” (e.g., bullets).");
const card5 = new card("The <li> element does what?", "Indicates each list item inside of a <ul>.");
