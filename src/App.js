import React from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import cardsList from "./data.json";
import "./App.css";
import Nav from "./components/Nav";

class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
    currentCards: [],
    clickedCards: []
  };

  componentDidMount() {
    this.generateCards();
  };

  /*
    Render a list of cards from data.json 

    @ id: Used to track specific cards in state
    @ key: Used to order cards in react/browser
    @ * : All else are card data properties
  */
  generateCards = () => {
    console.log("Generating Cards");
    
    let cards =  cardsList.map((singleCard, i) => {
      return <Card
        id={`SR-${i}`}
        key={`Card-Unit-${i}`}
        name={singleCard.name}
        image={singleCard.image}
        selectedCard={this.selectedCard}
      />
    })

    this.setState({currentCards: cards});
  };

  selectedCard = (id) => {
    console.log("Selecting Card: ", this.state.clickedCards);
    
    
    if (this.state.clickedCards.includes(id)) this.endGame("You Lost!")
    else {
      this.incrementScores();

      //Increment score if user clicks correctly, else run the end game function displaying a loss.
      let newClicked = [...this.state.clickedCards, id];
      this.setState({clickedCards: newClicked});

      console.log("Selected Card: ", this.state.clickedCards);
  
      //When the user reaches all one-time-clicked cards, run the end game function displaying a win, else shuffle for the next click.
      if (this.state.currentCards.length === this.state.clickedCards.length) this.endGame("You Win!")
      else this.shuffleCards();
    }
  };

  incrementScores = () => {
    console.log(`Incrementing Current: ${this.state.currentScore} HighScore: ${this.state.highScore}`);
    let currentHighScore = this.state.highScore;
    let newIncrement = this.state.currentScore + 1; //do a (+1) not a (++)
    this.setState({currentScore: newIncrement});

    //If the current score gets higher than the high score, update high score to current score
    if (newIncrement > currentHighScore) this.setState({highScore: newIncrement});
    console.log(`Incremented Current: ${this.state.currentScore} HighScore: ${this.state.highScore}`);
  }
  
  shuffleCards = () => {
    var tempCards = this.state.currentCards
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
    */
    for (let i = tempCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempCards[i], tempCards[j]] = [tempCards[j], tempCards[i]];
    }

    this.setState({currentCards: tempCards})
  };

  endGame = (prompt) => {
    console.log(`Ending Game, Current: ${this.state.currentScore} HighScore: ${this.state.highScore} Cards: `, this.state.currentCards);    
    this.setState({currentCards: [<h2>{prompt}</h2>, <br /> , <a onClick={() => this.generateCards()}>Click Here to Play Again!</a>], currentScore: 0, clickedCards: []});
    console.log(`Ending Game, Current: ${this.state.currentScore} HighScore: ${this.state.highScore} Cards: `, this.state.currentCards);
    
  }

  displayCards = () => {
    return this.state.currentCards
  };
  
  render() {
    return (
      <React.Fragment>
        <Nav currentScore={this.state.currentScore} highScore={this.state.highScore}/>
        <Wrapper>
          { this.displayCards() }
        </Wrapper>
      </React.Fragment>
    );
  }
};

export default App;
