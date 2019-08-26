import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
// import Header from "./components/Header";
import characters from "./characters.json"

class App extends Component {
  state = {
    characters: characters,
    score: "0",
    topScore: "0"
  };

  render() {
    return (
      <div>
        <Navbar begin = {this.state.begin} score = {this.state.score} topScore = {this.state.topScore}>
        </Navbar>

        <h2 className="mt-4">Click any image to start!</h2>

        <Wrapper>

        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
        />
        ))}
        
      </Wrapper>
      </div>
    );
  }
}

export default App;
