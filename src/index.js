import swapi from './swapi.js';
//import swapi from './swapi.js'; --> Fem la crida swapi.getMovieCount
// Aquest index només serveix per provar algunes funcions si vols fer ús de la consola
// per provar les funcions que has creat.

async function main() {
  try {
    const numberOfMovies = await swapi.getMovieInfo(3);
    console.log(numberOfMovies);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
