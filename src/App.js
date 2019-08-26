import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        {/* <Header>

        </Header> */}
        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
        />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
