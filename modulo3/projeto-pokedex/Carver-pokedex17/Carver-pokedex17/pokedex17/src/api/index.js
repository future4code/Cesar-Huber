import axios from "axios";

const URL = " https://pokeapi.co/api/v2";

export function getPokemon(pokemonID) {
  return axios.get(`${URL}/pokemon/${pokemonID}`);
}

export function getPokemonList(limit, offset) {
  return axios.get(`${URL}/pokemon?limit=${limit}&offset=${offset}`);
}
