import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Home from '../pages/Home';
import Header from './Header';
import Matches from '../pages/Matches';
import axios from 'axios';
import { BASE_URL, aluno } from '../urls/urls';


export default function MainContainer() {

  const [currentPage, setCurrentPage] = useState('Home')

  const goToAllMatches = () => {
    setCurrentPage('Matches')
  }

  const goToHome = () => {
    setCurrentPage('Home')
  }

  const showPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home 
          getMatches={getMatches}
          matchesList={matchesList}
        />
      case 'Matches':
        return <Matches
          matchesList={matchesList}
          getMatches={getMatches}
        />
      default:
        return <Home 
          getMatches={getMatches}
          matchesList={matchesList}
        />
    }
  }

  const [matchesList, setMatchesList] = useState([])

  const getMatches = () => {
    axios.get(`${BASE_URL}${aluno}/matches`)
      .then((res) => {
        setMatchesList(res.data.matches)
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  const clearMatches = () => {
    axios.put(`${BASE_URL}${aluno}/clear`)
    .then((res) => {
      getMatches()
      alert('Seus matches foram limpos com sucesso')
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Box
          sx={{
            height: '100vh',
            bgcolor: '#D2D7DF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* ------------------ Início Estrutura Principal ------------------ */}
          <Header
            goToAllMatches={goToAllMatches}
            goToHome={goToHome}
            matchesList={matchesList}
            getMatches={getMatches}
            clearMatches={clearMatches}
            currentPage={currentPage}
          />
          {showPage()}





          {/* ------------------- Fim Estrutura Principal -------------------- */}
        </Box>
      </Container>
    </React.Fragment>
  )
}
