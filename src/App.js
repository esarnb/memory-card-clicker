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
        shuffleCards={this.shuffleCards}
        selectedCard={this.selectedCard}
      />
    })

    this.setState({currentCards: cards});
  };

  selectedCard = (id) => {
    //Increment score if user clicks correctly, else run the end game function displaying a loss.
    let newClicked = [...this.state.clickedCards, id];
    this.setState({clickedCards: newClicked});
    if (this.state.clickedCards.includes(id)) this.endGame("You Lost!")
    else {
      let newIncrement = this.state.currentScore++;
      this.setState({currentScore: newIncrement});
    }

    //If the current score gets higher than the high score, update high score to current score
    if (this.state.currentScore > this.state.highScore) this.setState({highScore: this.state.currentScore});

    //When the user reaches all one-time-clicked cards, run the end game function displaying a win, else shuffle for the next click.
    if (this.state.currentCards.length == this.state.clickedCards.length) this.endGame("You Win!")
    else this.shuffleCards();
  };
  
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

  endGame = () => {
    this.setState({currentCards: <h2>You Lost!</h2>, currentScore: 0});

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
