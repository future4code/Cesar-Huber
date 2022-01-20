import React from "react";
import { useNavigate } from "react-router";
import PokemonList from "../../components/PokemonList";
import { gotToPokedex } from "../../routes/coodinator";
import { Main, Header } from "./Styled";
import Pagination from '@mui/material/Pagination';
import { useGlobalStates, useGlobalSetters } from '../../global/GlobalState'

export default function Home() {
  const navigate = useNavigate();
  const { page, limit, offset } = useGlobalStates();
  const { setPage, setLimit, setOffset } = useGlobalSetters();

  const handlePageChange = (event, value) => {
    setPage(value)
    setOffset((value * limit) - limit)
  }

  return (
    <>
      <Header>
        <button onClick={() => gotToPokedex(navigate)}>Pokédex</button>
        <h1>Lista dos Pokémons</h1>
      </Header>
      <Pagination 
        sx={{ margin: '20px' }} 
        count={45} 
        variant="outlined" 
        shape="rounded" 
        page={page.page} 
        onChange={handlePageChange} 
      />
      <Main>
        <PokemonList />
      </Main>
    </>
  );
}
