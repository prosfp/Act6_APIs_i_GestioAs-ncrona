const swapi = require('../src/swapi');

describe('StarWars API SWAPI', () => {
  describe('getPeople', () => {
    it('should return an array of people objects', async () => {
      const people = await swapi.getPeople();
      expect(Array.isArray(people)).toBe(true);
      expect(people.length).toBeGreaterThan(0);
      expect(people[0]).toHaveProperty('name');
      expect(people[0]).toHaveProperty('height');
      expect(people[0]).toHaveProperty('mass');
      expect(people[0]).toHaveProperty('hair_color');
      expect(people[0]).toHaveProperty('skin_color');
      expect(people[0]).toHaveProperty('eye_color');
      expect(people[0]).toHaveProperty('birth_year');
      expect(people[0]).toHaveProperty('gender');
      expect(people[0]).toHaveProperty('homeworld');
      expect(people[0]).toHaveProperty('films');
      expect(people[0]).toHaveProperty('species');
      expect(people[0]).toHaveProperty('vehicles');
      expect(people[0]).toHaveProperty('starships');
      expect(people[0]).toHaveProperty('created');
      expect(people[0]).toHaveProperty('edited');
      expect(people[0]).toHaveProperty('url');
    });
  });

  describe('getPerson', () => {
    it('should return a person object', async () => {
      const person = await swapi.getPerson(1);
      expect(person).toHaveProperty('name');
      expect(person).toHaveProperty('height');
      expect(person).toHaveProperty('mass');
      expect(person).toHaveProperty('hair_color');
      expect(person).toHaveProperty('skin_color');
      expect(person).toHaveProperty('eye_color');
      expect(person).toHaveProperty('birth_year');
      expect(person).toHaveProperty('gender');
      expect(person).toHaveProperty('homeworld');
      expect(person).toHaveProperty('films');
      expect(person).toHaveProperty('species');
      expect(person).toHaveProperty('vehicles');
      expect(person).toHaveProperty('starships');
      expect(person).toHaveProperty('created');
      expect(person).toHaveProperty('edited');
      expect(person).toHaveProperty('url');
    });
  });

  describe('getFilms', () => {
    it('should return an array of film objects', async () => {
      const films = await swapi.getFilms();
      expect(Array.isArray(films)).toBe(true);
      expect(films.length).toBeGreaterThan(0);
      expect(films[0]).toHaveProperty('title');
      expect(films[0]).toHaveProperty('episode_id');
      expect(films[0]).toHaveProperty('opening_crawl');
      expect(films[0]).toHaveProperty('director');
      expect(films[0]).toHaveProperty('producer');
      expect(films[0]).toHaveProperty('release_date');
      expect(films[0]).toHaveProperty('characters');
      expect(films[0]).toHaveProperty('planets');
      expect(films[0]).toHaveProperty('starships');
      expect(films[0]).toHaveProperty('vehicles');
      expect(films[0]).toHaveProperty('species');
      expect(films[0]).toHaveProperty('created');
      expect(films[0]).toHaveProperty('edited');
      expect(films[0]).toHaveProperty('url');
    });
  });

  describe('getFilm', () => {
    it('should return a film object', async () => {
      const film = await swapi.getFilm(1);
      expect(film).toHaveProperty('title');
      expect(film).toHaveProperty('episode_id');
      expect(film).toHaveProperty('opening_crawl');
      expect(film).toHaveProperty('director');
      expect(film).toHaveProperty('producer');
      expect(film).toHaveProperty('release_date');
      expect(film).toHaveProperty('characters');
      expect(film).toHaveProperty('planets');
      expect(film).toHaveProperty('starships');
      expect(film).toHaveProperty('vehicles');
      expect(film).toHaveProperty('species');
      expect(film).toHaveProperty('created');
      expect(film).toHaveProperty('edited');
      expect(film).toHaveProperty('url');
    });
  });

  describe('getPlanets', () => {
    it('should return an array of planet objects', async () => {
      const planets = await swapi.getPlanets();
      expect(Array.isArray(planets)).toBe(true);
      expect(planets.length).toBeGreaterThan(0);
      expect(planets[0]).toHaveProperty('name');
      expect(planets[0]).toHaveProperty('rotation_period');
      expect(planets[0]).toHaveProperty('orbital_period');
      expect(planets[0]).toHaveProperty('diameter');
      expect(planets[0]).toHaveProperty('climate');
      expect(planets[0]).toHaveProperty('gravity');
      expect(planets[0]).toHaveProperty('terrain');
      expect(planets[0]).toHaveProperty('surface_water');
      expect(planets[0]).toHaveProperty('population');
      expect(planets[0]).toHaveProperty('residents');
      expect(planets[0]).toHaveProperty('films');
      expect(planets[0]).toHaveProperty('created');
      expect(planets[0]).toHaveProperty('edited');
      expect(planets[0]).toHaveProperty('url');
    });
  });

  describe('getPlanet', () => {
    it('should return a planet object', async () => {
      const planet = await swapi.getPlanet(1);
      expect(planet).toHaveProperty('name');
      expect(planet).toHaveProperty('rotation_period');
      expect(planet).toHaveProperty('orbital_period');
      expect(planet).toHaveProperty('diameter');
      expect(planet).toHaveProperty('climate');
      expect(planet).toHaveProperty('gravity');
      expect(planet).toHaveProperty('terrain');
      expect(planet).toHaveProperty('surface_water');
      expect(planet).toHaveProperty('population');
      expect(planet).toHaveProperty('residents');
      expect(planet).toHaveProperty('films');
      expect(planet).toHaveProperty('created');
      expect(planet).toHaveProperty('edited');
      expect(planet).toHaveProperty('url');
    });
  });

  describe('getSpecies', () => {
    it('should return an array of species objects', async () => {
      const species = await swapi.getSpecies();
      expect(Array.isArray(species)).toBe(true);
      expect(species.length).toBeGreaterThan(0);
      expect(species[0]).toHaveProperty('name');
      expect(species[0]).toHaveProperty('classification');
      expect(species[0]).toHaveProperty('designation');
      expect(species[0]).toHaveProperty('average_height');
      expect(species[0]).toHaveProperty('skin_colors');
      expect(species[0]).toHaveProperty('hair_colors');
      expect(species[0]).toHaveProperty('eye_colors');
      expect(species[0]).toHaveProperty('average_lifespan');
      expect(species[0]).toHaveProperty('homeworld');
      expect(species[0]).toHaveProperty('language');
      expect(species[0]).toHaveProperty('people');
      expect(species[0]).toHaveProperty('films');
      expect(species[0]).toHaveProperty('created');
      expect(species[0]).toHaveProperty('edited');
      expect(species[0]).toHaveProperty('url');
    });
  });

  describe('getSpecie', () => {
    it('should return a specie object', async () => {
      const specie = await swapi.getSpecie(1);
      expect(specie).toHaveProperty('name');
      expect(specie).toHaveProperty('classification');
      expect(specie).toHaveProperty('designation');
      expect(specie).toHaveProperty('average_height');
      expect(specie).toHaveProperty('skin_colors');
      expect(specie).toHaveProperty('hair_colors');
      expect(specie).toHaveProperty('eye_colors');
      expect(specie).toHaveProperty('average_lifespan');
      expect(specie).toHaveProperty('homeworld');
      expect(specie).toHaveProperty('language');
      expect(specie).toHaveProperty('people');
      expect(specie).toHaveProperty('films');
      expect(specie).toHaveProperty('created');
      expect(specie).toHaveProperty('edited');
      expect(specie).toHaveProperty('url');
    });
  });

  describe('getStarships', () => {
    it('should return an array of starship objects', async () => {
      const starships = await swapi.getStarships();
      expect(Array.isArray(starships)).toBe(true);
      expect(starships.length).toBeGreaterThan(0);
      expect(starships[0]).toHaveProperty('name');
      expect(starships[0]).toHaveProperty('model');
      expect(starships[0]).toHaveProperty('manufacturer');
      expect(starships[0]).toHaveProperty('cost_in_credits');
      expect(starships[0]).toHaveProperty('length');
      expect(starships[0]).toHaveProperty('max_atmosphering_speed');
      expect(starships[0]).toHaveProperty('crew');
      expect(starships[0]).toHaveProperty('passengers');
      expect(starships[0]).toHaveProperty('cargo_capacity');
      expect(starships[0]).toHaveProperty('consumables');
      expect(starships[0]).toHaveProperty('hyperdrive_rating');
      expect(starships[0]).toHaveProperty('MGLT');
      expect(starships[0]).toHaveProperty('starship_class');
      expect(starships[0]).toHaveProperty('pilots');
      expect(starships[0]).toHaveProperty('films');
      expect(starships[0]).toHaveProperty('created');
      expect(starships[0]).toHaveProperty('edited');
      expect(starships[0]).toHaveProperty('url');
    });
  });

  describe('getStarship', () => {
    it('should return a starship object', async () => {
      const starship = await swapi.getStarship(2);
      expect(starship).toHaveProperty('name');
      expect(starship).toHaveProperty('model');
      expect(starship).toHaveProperty('manufacturer');
      expect(starship).toHaveProperty('cost_in_credits');
      expect(starship).toHaveProperty('length');
      expect(starship).toHaveProperty('max_atmosphering_speed');
      expect(starship).toHaveProperty('crew');
      expect(starship).toHaveProperty('passengers');
      expect(starship).toHaveProperty('cargo_capacity');
      expect(starship).toHaveProperty('consumables');
      expect(starship).toHaveProperty('hyperdrive_rating');
      expect(starship).toHaveProperty('MGLT');
      expect(starship).toHaveProperty('starship_class');
      expect(starship).toHaveProperty('pilots');
      expect(starship).toHaveProperty('films');
      expect(starship).toHaveProperty('created');
      expect(starship).toHaveProperty('edited');
      expect(starship).toHaveProperty('url');
    });
  });

  describe('getVehicles', () => {
    it('should return an array of vehicle objects', async () => {
      const vehicles = await swapi.getVehicles();
      expect(Array.isArray(vehicles)).toBe(true);
      expect(vehicles.length).toBeGreaterThan(0);
      expect(vehicles[0]).toHaveProperty('name');
      expect(vehicles[0]).toHaveProperty('model');
      expect(vehicles[0]).toHaveProperty('manufacturer');
      expect(vehicles[0]).toHaveProperty('cost_in_credits');
      expect(vehicles[0]).toHaveProperty('length');
      expect(vehicles[0]).toHaveProperty('max_atmosphering_speed');
      expect(vehicles[0]).toHaveProperty('crew');
      expect(vehicles[0]).toHaveProperty('passengers');
      expect(vehicles[0]).toHaveProperty('cargo_capacity');
      expect(vehicles[0]).toHaveProperty('consumables');
      expect(vehicles[0]).toHaveProperty('vehicle_class');
      expect(vehicles[0]).toHaveProperty('pilots');
      expect(vehicles[0]).toHaveProperty('films');
      expect(vehicles[0]).toHaveProperty('created');
      expect(vehicles[0]).toHaveProperty('edited');
      expect(vehicles[0]).toHaveProperty('url');
    });
  });

  describe('getVehicle', () => {
    it('should return a vehicle object', async () => {
      const vehicle = await swapi.getVehicle(4);
      expect(vehicle).toHaveProperty('name');
      expect(vehicle).toHaveProperty('model');
      expect(vehicle).toHaveProperty('manufacturer');
      expect(vehicle).toHaveProperty('cost_in_credits');
      expect(vehicle).toHaveProperty('length');
      expect(vehicle).toHaveProperty('max_atmosphering_speed');
      expect(vehicle).toHaveProperty('crew');
      expect(vehicle).toHaveProperty('passengers');
      expect(vehicle).toHaveProperty('cargo_capacity');
      expect(vehicle).toHaveProperty('consumables');
      expect(vehicle).toHaveProperty('vehicle_class');
      expect(vehicle).toHaveProperty('pilots');
      expect(vehicle).toHaveProperty('films');
      expect(vehicle).toHaveProperty('created');
      expect(vehicle).toHaveProperty('edited');
      expect(vehicle).toHaveProperty('url');
    });
  });
});