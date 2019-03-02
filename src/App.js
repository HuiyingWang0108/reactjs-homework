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
    isOver: 0//0: Click an image to begin!; 1:You guessed incorrectly!; 2: You guessed correctly!
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
    this.setState({ isOver: 1 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            if (this.state.score > this.state.highscore) {
              this.setState({ highscore: this.state.score });
            }
            this.setState({ isOver: 2 });
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
  messageInfo = isOver => {
    if (isOver === 1) {
      return "You guessed incorrectly!";
    } else if (isOver === 2) {
      return "You guessed correctly!";
    } else if (isOver === 0) {
      return "Click an image to begin!";
    }
  }
  render() {
    return (
      <Wrapper>
        <Title
          // message= {this.state.gameOver ? "You guessed incorrectly!" : "You guessed correctly!"}
          isOver={this.state.isOver}
          messageInfo={this.messageInfo}
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
