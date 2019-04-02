
export const getImages = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(character => character.json())
        .then(c => c.results);

    return getImages
}