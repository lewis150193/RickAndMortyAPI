export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const POST_DATA = 'POST_DATA';




export const getCharacters =  () => dispatch => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(results => results.json())
            .then(characters => {
                    return dispatch({
                        type: GET_CHARACTERS,
                        payload: characters.results,
                    });
                })
    };

export const getCharacter = (id) => dispatch => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(character => {
            return dispatch({
                type: GET_CHARACTER,
                payload: character

            })
        })

};

export const postData = (id, title, body) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: title,
        body: body,
        userId: id
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => {
        return dispatch({
            type: POST_DATA,
            payload: json
        })
    });
};








