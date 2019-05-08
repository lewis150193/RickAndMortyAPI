import React from 'react';
import axios from 'axios';
import { Character } from "./Components/Character";
//TODO ADD TO ROUTES AND ALSO TO PAGES MAYBE ADD TO REDUX
export class FilterCharacters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            characters: []
        }
    }

    componentDidMount() {
        axios(`https://rickandmortyapi.com/api/character`)
            .then(char => this.setState({characters: char.data.results}))

    }

    filterCharacters = (e) => {
        this.setState({[e.target.name]: e.target.value});
        axios(`https://rickandmortyapi.com/api/character/?name=${this.state.name}`)
            .then(char => this.setState({characters: char.data.results}))
    }

    render() {
        const {characters } = this.state;
        console.log(characters);
        console.log(this.state.name)
        return (
            <>
                <input name='name' onChange={e => this.filterCharacters(e)} value={this.state.name}/>
                {characters.map( character => (
                    <Character
                    alt={character.id}
                    id={character.id}
                    name={character.name}
                    onClick={() => console.log('clicked')}
                    source={character.image}
                    />
                ))}
            </>
        );
    }

}