import swapi_axios from './swapi_axios.js';

async function main() {
  try {
    const numberOfMovies = await swapi_axios.getMovieCountAxios();
    console.log(numberOfMovies);
    // const numberOfMovies = await swapi_axios.getMovieCountAxios(3);
    // console.log(numberOfMovies);
    // const prova = await swapi_axios.githubExample();
    // document.getElementById('avatar').src = prova;
    // const repos = await swapi_axios.getRepos('prosfp');
    // console.log(repos);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
