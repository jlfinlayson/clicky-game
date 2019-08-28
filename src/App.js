import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import characters from "./characters.json"

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    topScore: 0
  };

//On Click

//needs to see if has been clicked already
//needs to change clicked to true/false
//needs to call randomize
//needs to reset or update score



//Win
win = () =>{
  this.setState({ score: this.state.score +1 })
}


//Randomize
//needs to move characters after each click


//Lose

  lose = () =>{
    this.setState({ score: 0 })
  }

//Top Score
// if win then add one if current score matches topscore
// if lose stay where it is
  



  render() {
    return (
      <div>
        <Navbar score = {this.state.score} topScore = {this.state.topScore}>
        </Navbar>

        <h2 className="mt-4">Click any image to start!</h2>

        <Wrapper>

        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
          clicked={character.clicked}
        />
        ))}
        
      </Wrapper>
      </div>
    )
  };

};

export default App;
