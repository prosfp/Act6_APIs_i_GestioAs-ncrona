const BASE_URL = 'https://swapi.info/api/';

function getMovieCount() {
  return fetch(`${BASE_URL}films/`)
    .then((res) => res.json())
    .then((json) => json.length)
    .catch((error) => console.error(error));
}

async function listMovies() {
  try {
    const res = await fetch(`${BASE_URL}films/`);
    if (!res.ok) {
      throw new Error('API request failed');
    }
    const data = await res.json();
    const movies = data.map((movie) => ({
      // en aquest cas millor literal que return {}
      name: movie.title,
      director: movie.director,
      release: movie.release_date,
      episodeID: movie.episode_id,
    }));
    return movies;
  } catch (error) {
    console.error('Error: ', error);
  }
}

async function listMoviesSorted() {
  const movies = await listMovies();
  return movies.sort(_compareByName);
}

async function listEvenMoviesSorted() {
  const movies = await listMovies();
  return movies
    .filter((movie) => movie.episodeID % 2 === 0)
    .sort(_compareByEpisodeId);
}

async function getMovieInfo(id) {
  return fetch(`${BASE_URL}films/${id}/`)
    .then((res) => res.json())
    .then((movie) => ({
      name: movie.title,
      episodeID: movie.episode_id,
      characters: movie.characters,
    }))
    .catch((error) => console.error(error));
}

// Funcions Auxiliars

function _compareByName(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function _compareByEpisodeId(a, b) {
  return a.episodeID - b.episodeID;
}
// Aneu afegint les functions a exportar aquí

export default {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
};
