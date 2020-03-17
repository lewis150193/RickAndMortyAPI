import React, { Component } from 'react';
import '../App.css';
import {Character} from "../Components/Character";
import {getCharacter} from "../actions";
import {connect} from "react-redux";

class OneImage extends Component {
    componentDidMount() {
        const photo = this.props.match.params.id;
        this.props.getcharacterAction(photo)
    };

    render() {
        const { character } = this.props;
        console.log(character);
        console.log(this.props);
        return (
            <div className="App">
                <Character
                    name={character.name}
                    alt={character.name}
                    id={character.id}
                    source={character.image}
                    />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    character:  state.character
});

const mapDispatchToProps = {
    getcharacterAction: getCharacter

};
export default connect(mapStateToProps,mapDispatchToProps)(OneImage);

