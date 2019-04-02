import React, { Component } from 'react';
import '../App.css';
import {Character} from "../Character";

class OneImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: {}
        }

    }
    componentDidMount() {
        const photo = this.props.match.params.id;
        fetch(`https://rickandmortyapi.com/api/character/${photo}`)
            .then(character => character.json())
            .then(result => this.setState({characters: result}));
    };

    render() {
        const { characters } = this.state;
        console.log(characters);
        console.log(this.props);
        return (
            <div className="App">
                <p>One Image</p>
                <Character
                    name={characters.name}
                    alt={characters.name}
                    id={characters.id}
                    source={characters.image}
                    />
            </div>
        );
    }
}

export default OneImage;
