const BASE_URL = 'https://swapi.dev/api/';

export function getMovieCount() {
  return fetch(`${BASE_URL}films/`)
    .then((res) => res.json())
    .then((json) => json.count);
}

// Aneu afegint les functions a exportar aquí
const swapi = {
  getMovieCount,
};

export default swapi;
