const BASE_URL = 'https://swapi.dev/api/';

export function getMovieCount() {
  return fetch(`${BASE_URL}films/`)
    .then((res) => res.json())
    .then((json) => json.count);
}

// export async function getMovieCount() {
//   const res = await fetch('https://swapi.dev/api/films/');
//   const data = await res.json();
//   return data.count;
// }

// Una bona opció si teniu ja prou apresa la lògica, és fer una funció genèrica per fer les requests a la API

// export async function getSwapiData(path) {
//   const res = await fetch(`${BASE_URL}${path}`);
//   const data = await res.json();
//   return data;
// }

// export async function getMovieCount() {
//   const data = await getSwapiData('films/');
//   return data.count;
// }

// Aneu afegint les functions a exportar aquí
const swapi = {
  getMovieCount,
};

export default swapi;
