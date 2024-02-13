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

async function getCharacterName(url) {
  try {
    const res = await fetch(url);
    const character = await res.json();
    return character.name;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Exercici 5.3

async function getMovieCharacters(id) {
  try {
    const movie = await getMovieInfo(id);
    //movie.characters = await movie.characters.map(getCharacterName);
    movie.characters = await Promise.allSettled(
      movie.characters.map(getCharacterName)
    );
    movie.characters = movie.characters.map((character) => {
      if (character.status === 'fulfilled') {
        return character.value;
      } else {
        return null;
      }
    });
    return movie;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Exercici 6

async function getMovieCharactersAndHomeworlds(id) {
  //obtinc novament la info general de la peli
  try {
    const movie = await getMovieInfo(id);
    movie.characters = await _getCharactersNamesAndHomeworlds(movie);
    return movie;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Exercici 7

async function createMovie(id) {
  const movie = await getMovieInfo(id);
  return new Movie(movie.name, movie.characters);
}

export class Movie {
  // camps privats
  #characterUrls = [];
  constructor(name, characterUrls) {
    this.name = name;
    this.#characterUrls = characterUrls;
  }

  async getCharacters() {
    // Tenim la funció getCharacterName que ens retorna el nom del personatge en base al seu endpoint/url
    // I si passem aquesta funció com a Callback?
    return await Promise.all(this.#characterUrls.map(getCharacterName));
  }

  async getHomeworlds() {
    const namesAndHomeworlds = await Promise.all(
      this.#characterUrls.map(_getCharacterInfoAndHomeworld)
    );
    const homeworlds = namesAndHomeworlds.map((item) => item.homeworld);
    const uniqueHomeworlds = new Set(homeworlds);
    return [...uniqueHomeworlds];
  }

  async getHomeworldsReverse() {
    const homeworlds = await this.getHomeworlds();
    return homeworlds.sort().reverse();
  }
}

// Funcions Auxiliars

async function _getCharactersNamesAndHomeworlds(movie) {
  const charactersWithHomeWorlds = await Promise.all(
    movie.characters.map(_getCharacterInfoAndHomeworld)
  );
  return charactersWithHomeWorlds;
}

async function _getCharacterInfoAndHomeworld(url) {
  try {
    const data = await fetch(url);
    const res = await data.json();
    const character = {
      name: res.name,
      homeworld: res.homeworld,
    };

    character.homeworld = await _getHomeWorldName(character.homeworld);
    return character;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function _getHomeWorldName(url) {
  try {
    const data = await fetch(url);
    const res = await data.json();
    return res.name;
  } catch (error) {
    console.error('Error:', error);
  }
}

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
  getCharacterName,
  getMovieCharacters,
  getMovieCharactersAndHomeworlds,
  createMovie,
};
