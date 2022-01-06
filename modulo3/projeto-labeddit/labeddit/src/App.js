import Router from "./routes/Router";
import {createGlobalStyle} from 'styled-components'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
`

function App() {

  const [searchFor, setSearchFor] = useState('')
  
  const handleSearchBar = (e) => {
    setSearchFor(e.target.value)
}

  return (
    <>
      <GlobalStyle />
      <Router 
        searchFor={searchFor}
        handleSearchBar={handleSearchBar}
      /> 
    </>
  );
}

export default App;
