import { useEffect, useState } from "react";
import { getPokemon, getPokemonList } from "../api";

export default function useGetPokemonList(limit, offset) {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");
  const [ pokemonErrors, setPokemonErrors ] = useState([]);

  async function getPokemonListFromApi() {
    try {
      setLoading(true);

      const pokemonNames = (await getPokemonList(limit, offset)).data.results;

      const pokemons = (await Promise.all(pokemonNames.map(async (pokemon) => {
        try {
          return (await getPokemon(pokemon.name)).data;
        } catch (error) {
          setPokemonErrors((errors) => [ ...errors, error ]);
        }
      })))
        .filter((pokemon) => pokemon);

      setPokemonList(pokemons);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => getPokemonListFromApi(), [])
  useEffect(() => console.log('rodado ao iniciar'), [])
  useEffect(() => getPokemonListFromApi(), [limit, offset])
  useEffect(() => console.log('rodado ao atualizar limit ou offset'), [limit, offset])
  

  return {
    pokemonList,
    loading,
    error,
    pokemonErrors
  };
}

