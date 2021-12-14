import Router from "./routes/Router";
import {createGlobalStyle} from 'styled-components'

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
  return (
    <>
      <GlobalStyle />
      <Router /> 
    </>
  );
}

export default App;
