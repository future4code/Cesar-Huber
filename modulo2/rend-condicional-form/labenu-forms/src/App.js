import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import { createGlobalStyle } from 'styled-components'
import React from 'react'
 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: whitesmoke;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin: 20px 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
`

export default class App extends React.Component {
  
  state = {
    etapa: 1
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  etapaAnterior = () => {
    this.setState({etapa: this.state.etapa - 1})
  }

  etapaInicial = () => {
    this.setState({etapa: this.state.etapa = 1})
  }

  escolhaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2: 
        return <Etapa2 />
      case 3: 
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Etapa1 />
    }

    // if (this.state.etapa === 1) {
    //   return <Etapa1 />
    // }
    // else if (this.state.etapa === 2 && NivelEscolaridade > 2) {
    //   console.log(NivelEscolaridade)
    //   return <Etapa2 />
    // }
    // else if (this.state.etapa === 2 && NivelEscolaridade < 3) {
    //   console.log(NivelEscolaridade)
    //   return <Etapa3 />
    // }
    // else if (this.state.etapa === 3) {
    //   return <Final />
    // }
  }

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        
        {this.escolhaEtapa(this.state.etapa)}
        <ButtonContainer>
          {this.state.etapa > 1 && this.state.etapa < 4 ? <button onClick={this.etapaAnterior}>Etapa Anterior</button> : ""}
          {this.state.etapa < 4 ? <button onClick={this.proximaEtapa}>Próxima Etapa</button> : ""}
          {this.state.etapa === 4 ? <button onClick={this.etapaInicial}>Voltar ao início do formulário</button> : ""}
        </ButtonContainer>
      </MainContainer>
    )
  }
}
