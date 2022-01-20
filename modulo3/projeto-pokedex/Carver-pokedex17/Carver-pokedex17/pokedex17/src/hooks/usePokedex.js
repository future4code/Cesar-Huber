import { useEffect, useState } from "react";
import { useGlobalSetters, useGlobalStates } from "../global/GlobalState";

export default function usePokedex(pokemonName) {
  const { setPokedex } = useGlobalSetters();
  const { pokedex, pokemonList } = useGlobalStates();
  const [ pokemon, setPokemon ]
    = useState(pokemonList.find(({ name }) => pokemonName === name));
  const [ inPokedex, setInPokedex ] = useState(pokedex.includes(pokemon));

  function togglePokedex(event) {
    event.stopPropagation();

    let newPokedex;

    if (inPokedex)
      newPokedex = pokedex.filter((pokedexPokemon) => !(pokedexPokemon === pokemon));
    else
      newPokedex = [ ...pokedex, pokemon ];

    setInPokedex(!inPokedex);
    setPokedex(newPokedex);
  }

  useEffect(() => {
    const pokemon = pokemonList.find(({ name }) => pokemonName === name);
    const inPokedex = pokedex.includes(pokemon);

    setInPokedex(inPokedex);
    setPokemon(pokemon);
  }, [
    pokemonName,
    pokemonList,
    pokedex
  ]);

  return {
    inPokedex,
    togglePokedex
  };
}
