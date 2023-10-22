# StarWars API SWAPI Workspace

Aquest projecte te la finalitat de començar a treballar amb APIs i fer peticions a un servidor extern. Haurem de fer servir la lògica asincrònica per tal de fer les peticions i mostrar la informació a l'usuari. D'altra banda necessitarem tècniques de treball amb objectes, arrays i en general els seus mètodes per tal de poder filtrar la informació que ens retorna el servidor.

## Objectius

En aquest projecte treballem amb un servidor extern, per tant no tenim un fitxer JSON amb la informació que necessitem. Necessitem fer peticions a un servidor extern. En aquest cas farem servir l'API de StarWars SWAPI. Aquesta API ens permet fer peticions a diferents **endpoints** per tal de rebre la informació que necessitem. Per exemple, si volem rebre la informació de tots els personatges de StarWars, farem una petició a l'endpoint `https://swapi.dev/api/people/`. Si volem rebre la informació d'un personatge en concret, farem una petició a l'endpoint `https://swapi.dev/api/people/1/`. Com podeu veure, a l'endpoint hi afegim un número que correspon a l'ID del personatge que volem rebre. Això ens permet fer peticions a un servidor extern i rebre la informació que necessitem. 

Teniu la documentació de l'API a [https://swapi.dev/documentation](https://swapi.dev/documentation). 

## Project Structure

El boilerplate facilitat conté els següents fitxers i carpetes:

```
starwars-api-workspace
├── src
│   ├── index.html
│   ├── index.js
│   ├── swapi.js
│   └── styles.css
├── .babelrc
├── .eslintrc.json
├── package.json
├── package-lock.json
├── README.md
├── node_modules
└── tests
    └── swapi.test.js
```

Treballem amb Eslint, Jest i Babel. Eslint i Jest ja els hem vist en projectes anteriors. Babel és una eina que ens permet fer servir les últimes funcionalitats de JavaScript en tots els navegadors. Això vol dir que podem fer servir funcionalitats de JavaScript que encara no estan implementades en tots els navegadors. Babel s'encarrega de transpilar el nostre codi per tal que funcioni en tots els navegadors.

### `src` Folder

Farem servir la carpeta `src` per desar tot el codi del nostre projecte. Aquesta carpeta conté els següents fitxers:

- `index.html`: L'arxiu HTML que es carrega al navegador.
- `index.js`: L'arxiu JavaScript que s'executa al carregar la pàgina.
- `swapi.js`: L'arxiu JavaScript que conté la lògica per fer les peticions a l'API.
- `styles.css`: L'arxiu CSS que conté l'estil de la pàgina.


### Configuration Files

- `.babelrc`: The configuration file for Babel.
- `.eslintrc.json`: The configuration file for ESLint.
- `package.json`: The configuration file for npm.

## Previ:

Abans de res verifica que pots instalar totes les dependències:
    
```sh
1. Clona el repositori
2. Instal·la les dependència amb `npm install`.
```
# Comencem! 

## 1a Part
Claro, aquí tienes las tareas que deben realizarse en formato Markdown para GitHub:

```markdown
## Tasques a Realitzar

En aquesta PAC haureu de crear una sèrie de classes (o llibreries) que exposin les funcions
asíncrones que es detallen a continuació.

**Notes:**
1. S'entén que totes les funcions han de tornar promeses.
2. Aquests valors s'han d'obtenir des de l'API de Star Wars anteriorment presentada (SWAPI).
3. Els exercicis estan concebuts de manera que sigui un desenvolupament progressiu. Es penalitzarà el fet de no reutilitzar codi.

### Exercici 1 (1 punt)

Implementar una funció anomenada `getMovieCount()` que retorna un número corresponent a quantes pel·lícules hi ha al servidor.

**Exemple de retorn esperat un cop resolta la promesa:**
```
6
```

### Exercici 2 (1 punt)

Implementar una funció anomenada `listMovies()` que retorni una promesa que es resol amb un array d'objectes Film. Aquests objectes han de tenir només 4 atributs públics:
- `name: string`
- `director: string`
- `release: string`
- `episodeID: number

**Exemple de retorn esperat un cop resolta la promesa:**
```json
[
 {
 "name": "A New Hope",
 "director": "George Lucas",
 "release": "1977-05-25",
 "episodeID": 4
 },
 ...
]
```

### Exercici 3 (1 punt)

Implementar una funció anomenada `listMoviesSorted()` que retorna una promesa que es resol amb un array que conté els títols de les pel·lícules ordenats alfabèticament juntament amb director, data de llançament i Id d'episodi.

**Exemple de retorn esperat un cop resolta la promesa:**
```json
[
{ "name": "A New Hope", "director": "George Lucas", "release": "1977-05-25", "episodeID": 4 },
{ "name": "Return of the Jedi", "director": "Richard Marquand", "release": "1983-05-25", "episodeID": 6 },
{ "name": "The Phantom Menace", "director": "George Lucas", "release": "1999-05-19", "episodeID": 1 },
]
```

### Exercici 4 (1 punt)

Implementar una funció anomenada `listEvenMoviesSorted()` que retorna una promesa que es resol amb un array d'objectes Film ordenats per episodeID de forma ascendent. Només s'han de retornar els episodis parells.

**Nota:** Poseu especial atenció als tipus de dades i a la coerció de tipus a JavaScript.

**Exemple de retorn esperat un cop resolta la promesa:**
```json
[
{ "name": "Attack of the Clones", "director": "George Lucas", "release": "2002-05-16", "episodeID": 2 },
{ "name": "A New Hope", "director": "George Lucas", "release": "1977-05-25", "episodeID": 4 },
]
```

### Exercici 5 (2 punts)

#### Exercici 5.1 (0.25 punts)

Implementar una funció `getMovieInfo(id: string)` que donat un id d'una pel·lícula, ens retorni una promesa que es resol amb un objecte que conté:
- `name: string` → Conté el nom de la pel·lícula.
- `episodeID: number` → Conté el camp episode_id.
- `characters: Array<string>` → Conté un array amb les URL de les que es pot obtenir la informació d'un personatge.

**Exemple de retorn esperat un cop resolta la promesa:**
```json
{
 characters: [
 "http://swapi.dev/api/people/1/",
 "http://swapi.dev/api/people/2/",
 "http://swapi.dev/api/people/3/",
 "http://swapi.dev/api/people/4/",
 "http://swapi.dev/api/people/5/",
 ...
 ],
 episodeID: 4,
 name: "A New Hope",
}
```

#### Exercici 5.2 (0.25 punts)

Reescriure la funció `getCharacterName(URL: string)` que donada una url d'un personatge d'una pel·lícula, retorna una promesa que es resol amb el nom del personatge, utilitzant `async` i `await`.

**Exemple de retorn esperat un cop resolta la promesa:**
```json
'Luke Skywalker'
```

#### Exercici 5.3 (1.5 punts)

Implementar una funció `getMovieCharacters(id: string)` que donat un id d'una pel·lícula, retorna una promesa que es resol amb un array que conté els noms dels personatges que apareixen a la mateixa pel·lícula.

- Utilitzant `async` i `await` és més intuïtiva.
- La complexitat d'aquest exercici rau en transformar les adreces que ens arriben a l'atribut characters de la pel·lícula en noms.
- Heu d’utilitzar la funció `getCharacterName`.
- `Promise.All`

**Exemple de retorn esperat un cop resolta la promesa:**
```json
{
 name: "A New Hope",
 episodeID: 4,
 characters: [
 "Luke Skywalker",
 "C-3PO",
 "R2-D2",
 "Darth Vader",
 "Leia Organa",
 "Owen Lars",
 "Beru Whitesun lars",
 "R5-D4",
 "Biggs Darklighter",
 "Obi-Wan Kenobi",
 "Wilhuff Tarkin",
 "Chewbacca",
 "Han Solo",
 "Greedo",
 "Jabba Desilijic Tiure",
 "Wedge Antilles",
 "Jek Tono Porkins",
 "Raymus Antilles",
 ]
}
```

### Exercici 6 (1.5 punts)

Implementar una funció anomenada `getMovieCharactersAndHomeworlds(id: string)` que retorna una promesa que es resol amb un objecte que conté, tan sols, els següents atributs públics:
- `episodeID: Number`, conjté el camp episode_id.
- `name: String` indicant el títol de la pel·lícula.
- `characters: Un array que conté informació sobre els personatges que surten a la pel·lícula.


