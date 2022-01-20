import React, { useContext, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import useGetPokemonList from "../hooks/useGetPokemonList";

export const GlobalState = (props) => {
  const [ pokedex, setPokedex ] = useState([]);
  const [ page, setPage ] = useState(1)
  const [ limit, setLimit ] = useState(20)
  const [ offset, setOffset ] = useState(0)
  const {
    pokemonList, loading, error, pokemonErrors
  } = useGetPokemonList(20, offset); //pagination

  const states = {
    pokemonList,
    loading,
    error,
    pokemonErrors,
    pokedex,
    page,
    limit,
    offset
  };

  const setters = { setPokedex, setPage, setLimit, setOffset };

  return (
    <GlobalStateContext.Provider
      value={{
        states,
        setters
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalStateContext);

export const useGlobalStates = () => {
  const { states } = useGlobal();
  return states;
};

export const useGlobalSetters = () => {
  const { setters } = useGlobal();
  return setters;
};
