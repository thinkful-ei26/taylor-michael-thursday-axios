const axios = require('axios');
BASE_URL = 'https://swapi.co/api/';

//const searchTerm = process.argv[2]; 

//console.log(searchTerm); 

const url = 'https://swapi.co/api/people/1';

axios.get(url)
//   .then( film => {
//     console.log(film.title);

//     return $.getJSON(film.characters[0]);

//   })
  .then( character => {
    const name = character.data.name;
    console.log(`${name} has been found!`);
    if(character.data.gender === 'male'){
        console.log(`He has starred in the following films:`)
    }
    else{
        console.log(`She has starred in the following films:`)

    }
    
    // return get(character.starships[0]);

//   }).then( starship => {
//     console.log(starship.name);
})