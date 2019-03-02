import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
// import FriendCard from "./components/FriendCard";
import Card from "./components/Card";
import cards from "./cards.json";

class App extends React.Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0,
    gameOver:false
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    this.setState({gameOver:true});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          return this.gameOver();
        }
      } else {
        return false;
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Title
          message={this.state.gameOver ? "You guessed incorrectly!" : "You guessed correctly!"}
          score={this.state.score}
          topScore={this.state.highscore}
        />
        <Header />
        <MainContainer>
          {
            cards.map((card) => <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />)
          }</MainContainer>
      </Wrapper>
    );
  };

}

export default App;
