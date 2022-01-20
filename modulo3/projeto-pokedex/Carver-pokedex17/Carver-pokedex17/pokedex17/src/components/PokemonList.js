import React from "react";
import PokeCard from "./PokeCard/PokeCard";
import { useGlobalStates } from "../global/GlobalState";

export default function PokemonList() {
  const { pokemonList, error, loading } = useGlobalStates();

  if (loading)
    return <p>Carregando...</p>;

  if (error)
    return <p>Erro! Tente novamente mais tarde.</p>;

  return (
    <>
      {pokemonList
        .map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
    </>
  );
}
