import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, gotToPokedex } from "../../routes/coodinator";
import { MainError, Header } from "./Styled";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <button onClick={() => goToHome(navigate)}>
          Pokémons
        </button>
                <button onClick={() => gotToPokedex(navigate)}>
          Pokedex
        </button>
      </Header>
            <MainError>
        
        <br/>
        <img
          src="https://media0.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif?cid=ecf05e471t8fl3wttm2qjgim3pu9epgvkiyfruo902liaesn&rid=giphy.gif&ct=g"
          alt="Erro"
        />
      </MainError>
    </>
  );
}

