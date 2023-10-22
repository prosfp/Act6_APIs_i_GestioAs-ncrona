const BASE_URL = 'https://swapi.dev/api/';

async function makeRequest(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default {
  async getPeople() {
    const url = `${BASE_URL}people/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getPerson(id) {
    const url = `${BASE_URL}people/${id}/`;
    const data = await makeRequest(url);
    return data;
  },

  async getFilms() {
    const url = `${BASE_URL}films/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getFilm(id) {
    const url = `${BASE_URL}films/${id}/`;
    const data = await makeRequest(url);
    return data;
  },

  async getPlanets() {
    const url = `${BASE_URL}planets/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getPlanet(id) {
    const url = `${BASE_URL}planets/${id}/`;
    const data = await makeRequest(url);
    return data;
  },

  async getSpecies() {
    const url = `${BASE_URL}species/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getSpecie(id) {
    const url = `${BASE_URL}species/${id}/`;
    const data = await makeRequest(url);
    return data;
  },

  async getStarships() {
    const url = `${BASE_URL}starships/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getStarship(id) {
    const url = `${BASE_URL}starships/${id}/`;
    const data = await makeRequest(url);
    return data;
  },

  async getVehicles() {
    const url = `${BASE_URL}vehicles/`;
    const data = await makeRequest(url);
    return data.results;
  },

  async getVehicle(id) {
    const url = `${BASE_URL}vehicles/${id}/`;
    const data = await makeRequest(url);
    return data;
  },
  
};

