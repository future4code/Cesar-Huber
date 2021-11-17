import { MainContainer } from "./styles";
import React from 'react'
import TelaCadastro from './components/TelaCadastro/TelaCadastro'
import TelaListaUsuarios from './components/TelaListaUsuarios/TelaListaUsuarios'

export default class App extends React.Component {

  state = {
    page: 1
  }

  definePage = () => {
    const newPage = this.state.page === 1 ? 2 : 1
    this.setState({page: newPage})
  }

  render() {
    return (
      <MainContainer>
        {this.state.page === 1 ?
          <TelaCadastro 
            definePage={this.definePage}
          />
          :
          <TelaListaUsuarios 
            definePage={this.definePage}
          />
        }
      </MainContainer>
    );
  }
}
