import React from "react";
import { useNavigate } from "react-router";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useGlobalStates } from "../../global/GlobalState";
import { goToHome } from "../../routes/coodinator";
import { Header, Main } from "./Styled";

export default function Pokedex() {
  const navigate = useNavigate();
  const { pokedex } = useGlobalStates();

  return (
    <>
      <Header>
        <button onClick={() => goToHome(navigate)}>Pokémons</button>
        <h1>Pokédex</h1>
      </Header>
      <Main>
        {pokedex
          .sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id)
          .map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
      </Main>
    </>
  );
}
