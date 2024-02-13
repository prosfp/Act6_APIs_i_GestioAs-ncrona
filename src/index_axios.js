import swapi from './swapi.js';
import swapi_axios from './swapi_axios.js';
//import swapi from './swapi.js'; --> Fem la crida swapi.getMovieCount
// Aquest index només serveix per provar algunes funcions si vols fer ús de la consola
// per provar les funcions que has creat.

async function main() {
  try {
    const prova = await swapi_axios.githubExample();
    document.getElementById('avatar').src = prova;
    const numberOfMovies = await swapi.getMovieInfo(3);
    console.log(numberOfMovies);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
