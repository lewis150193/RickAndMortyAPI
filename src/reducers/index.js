import {GET_CHARACTERS, GET_CHARACTER, POST_DATA } from "../actions";

import { combineReducers } from 'redux'

export const characters = (state = [], action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
}

export const character = (state = [], action ) => {
    switch (action.type) {
        case GET_CHARACTER:
            return action.payload;
        default:
            return state;


    }
}

export const post = (state = [], action ) => {
    switch (action.type) {
        case POST_DATA:
            return action.payload;
        default:
            return state;


    }
}




export default combineReducers({
    characters: characters,
    character: character,
    post: post

})