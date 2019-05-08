import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {getCharacters} from "../actions";
import {Character} from "../Components/Character";

class PhotoList extends Component {
  componentDidMount() {
     this.props.getcharacterAction();
  };


  render() {
   const { characters } = this.props;
   const {history} = this.props;
    // console.log(this.props);
      console.log(characters)
    return (
        <>
            <p style={{  cursor: 'pointer', border: 'black solid', width: '40px'}} onClick={() => {history.push('/')} }>Back</p>
            <div className="App">
        {characters.map( character => (
            <Character
                name={character.name}
                id={character.id}
                source={character.image}
                alt={character.name}
                onClick={ () => history.push(`/photos/${character.id}`)}
            />
            ))}
      </div>
            </>
    );
  }
}

const mapStateToProps = (state) => ({
    characters:  state.characters
});

const mapDispatchToProps = {
    getcharacterAction: getCharacters

};
export default connect(mapStateToProps,mapDispatchToProps)(PhotoList);

