import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import { useGlobalStates } from "../../global/GlobalState";
import { gotToPokedex, goToHome } from "../../routes/coodinator";
import { DetailsMain, Header, NavButtonsContainer } from "./Styled";
import usePokedex from "../../hooks/usePokedex";

export default function Details(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonList, loading } = useGlobalStates();
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id));
  const { name } = pokemon || {};
  const { inPokedex, togglePokedex } = usePokedex(pokemon?.name);


  return (
    <>
      <Header>
        <NavButtonsContainer>
          <button onClick={() => goToHome(navigate)}>Lista Pokémons</button>
          <button onClick={() => gotToPokedex(navigate)}>Minha Pokédex</button>
        </NavButtonsContainer>
        <h1>{name.toUpperCase() || "Detalhes Do Pokémon"}</h1>
        <button onClick={togglePokedex} disabled={!name}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
      </Header>
      <DetailsMain>
        {loading ? <p>Carregando Pokémon</p> : <PokemonDetails pokemon={pokemon} />}
      </DetailsMain>
    </>
  );
}
