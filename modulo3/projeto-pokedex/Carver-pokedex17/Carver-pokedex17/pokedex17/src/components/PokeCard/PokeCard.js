import React from "react";
import { Card, Buttons } from "./Styled";
import { goToDetails } from "../../routes/coodinator";
import { useNavigate } from "react-router-dom";
import usePokedex from "../../hooks/usePokedex";

export default function PokeCard(props) {
  const navigate = useNavigate();
  const { inPokedex, togglePokedex } = usePokedex(props.pokemon.name);

  function details(event) {
    event.stopPropagation();
    goToDetails(navigate, props.pokemon.id);
  }

  return (
    <Card onClick={details}>
      <img
        src={props.pokemon.sprites.other["official-artwork"].front_default}
        alt={props.pokemon.name}
      />
      <p>{props.pokemon.name}</p>
      <Buttons>
        <button onClick={togglePokedex}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
        <button onClick={details}>
          Detalhes
        </button>
      </Buttons>
    </Card>
  );
}
