import { getPeople } from './swapi.js';

async function main() {
  try {
    const people = await getPeople();
    console.log(people);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;