import React, { Component } from 'react';
import '../App.css';
import {Character} from "../Character";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [{}]
    }
  }

  componentDidMount() {
      setInterval(
    fetch('https://rickandmortyapi.com/api/character')
        .then(character => character.json())
        .then(c => c.results)
        .then(result => this.setState({characters: result}))
  ,900000)
  };

  render() {
   const { characters } = this.state;
   const {history} = this.props;
    console.log(characters);
    return (
      <div className="App">
        {this.state.characters.map( character => (
            <Character
                name={character.name}
                id={character.id}
                source={character.image}
                alt={character.name}
                onClick={ () => history.push(`/photos/${character.id}`)}
            />
            ))}
      </div>
    );
  }
}
export default PhotoList;
