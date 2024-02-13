import swapi from './swapi.js';
import swapi_axios from './swapi_axios.js';
//import swapi from './swapi.js'; --> Fem la crida swapi.getMovieCount
// Aquest index només serveix per provar algunes funcions si vols fer ús de la consola
// per provar les funcions que has creat.

async function main() {
  try {
    const prova = await swapi.getMovieCharactersAndHomeworlds('2');
    console.log(prova);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
