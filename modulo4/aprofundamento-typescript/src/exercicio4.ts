type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) tsc ./src/exercicio4.ts

// c) já estava na pasta src, mas se não estivesse, era só retirar o ./src/ do comando

// d) utilizar o comando tsc sozinho faz a transpilação de tudo de uma vez