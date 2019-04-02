 const getImages = ({setState}) => {
 fetch('https://rickandmortyapi.com/api/characters')
        .then(character => character.json())
        .then(c => c.results)
        .then( results => console.log(results))

};

