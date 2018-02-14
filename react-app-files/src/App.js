import React from "react";
import ClickyImage from "./components/ClickyImage";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Nav from "./components/Nav";
import "./App.css";

class App extends React.Component {
  
  state = {
    images: images,
    score: 0,
    topScore: 0,
    choiceMessage: "",
    shake: ""
  }

  componentDidMount() {
    this.state.images.map(image => image.wasClicked = false);
    console.log(this.state.images);
  }

  resetGame = () => {
    this.state.images.map(image => image.wasClicked = false);
    this.state.images.map(image => image.wasSelected = false);
    this.shuffleImages();
    this.setState({
      score: 0,
      images: images,
      choiceMessage: ""
    })
  }

  handleClick = (thisId) => {
    console.log(thisId);
    for(let i = 0; i < this.state.images.length; i++) {
      let element = this.state.images[i];
      if(element.id === thisId) {
        if(element.wasClicked === false) {
          element.wasClicked = true;
          this.setState({choiceMessage: "You chose correctly!"})
          if(this.state.score >= this.state.topScore) {
            this.setState({
              score: this.state.score + 1,
              topScore: this.state.topScore + 1
            });
          }
          else {
            this.setState({ score: this.state.score + 1});
          }
        }
        else {
          this.state.images.map(image => image.wasClicked = false);
          this.setState({ 
            choiceMessage: "You chose incorrectly!",
            score: 0,
            shake: "shake"
          });
        }
      }
    }
    this.shuffleImages();
  }

  shuffleImages = () => {
    this.state.images.map(image => image.wasShuffled = false);
    for(let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      if(images[j].wasShuffled === false) {
        let temp = images[i];
        images[i] = images[j];
        images[j] = temp;
        images[j].wasShuffled = true;
      }
    }
    console.log(images);
    this.setState({ images });
  }

  render() {
    const stateList = this.state.images.map(image => {
      return (
        <div className="col-xs-3">
          <ClickyImage
              key={image.id}
              name={image.name}
              image={image.image}
              id={image.id}
              onClick={() => this.handleClick(image.id)}
              shake={this.shake}
              message={this.state.choiceMessage}
          />
        </div>
      )
    });
    return (
      <div>
      <Nav score={this.state.score} topScore={this.state.topScore} reset={this.resetGame} message={this.state.choiceMessage} shake={this.shake}/>
      <Jumbotron />
      <Wrapper>
        <Row>
          {stateList}
        </Row>
      </Wrapper>
      </div>
    )
  }
}


export default App;
