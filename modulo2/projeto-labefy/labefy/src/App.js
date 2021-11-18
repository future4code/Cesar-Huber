import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import { MainDiv, ContainerHeader, ContainerLogo, ContainerMenu, ContainerMain } from './styles'
import logo_claro from './img/musica_clara.png'
import axios from 'axios'
import CreatePL from './components/CreatePL'
import PLList from './components/PLList'

const GlobalStyle = createGlobalStyle`
  *{
    /* db162f,dbdfac,119da4,6d9dc5,273e47 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends Component {

  state = {
    qtdPlaylists: 0,
    page: 'createPL'
  }

  componentDidMount() {
    this.getQtyAllPlaylists()
  }

  createNewPlaylist = (playlistName) => {
    const body = {
      name: playlistName
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'cesar-huber-carver'
      }
    })
      .then((res) => {
        alert(`Playlist ${playlistName} criada com sucesso!`)
        this.getQtyAllPlaylists()
      })
      .catch((err) => {
        switch (err.response.data.message) {
          case 'There already is a playlist with a similiar name.':
            alert('Poxa, já tem uma playlist com esse nome.\nVamos ser criativos e criar uma com nome diferente? =P \nSimbora!!')
          default:
            alert('Encontramos algum erro')
        }
        console.log(err.response.data)
      })
  }

  getQtyAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'cesar-huber-carver'
      }
    }).then((res) => {
      console.log(res.data)
      this.setState({ qtdPlaylists: res.data.result.list.length })
    }).catch((err) => {
      alert(err.response.data)
    })
  }

  goToCreatePL = () => {
    this.setState({ page: 'createPL' })
  }

  goToPLlist = () => {
    this.setState({ page: 'PLlist' })
  }

  choosePage = () => {
    switch (this.state.page) {
      case 'createPL':
        return <CreatePL
          qtdPlaylists={this.state.qtdPlaylists}
          createNewPlaylist={this.createNewPlaylist}
        />
      case 'PLlist':
        return <PLList />
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  render() {
    console.log(this.state.qtdPlaylists)
    return (
      <MainDiv>
        <GlobalStyle />
        <ContainerHeader>
          <ContainerLogo onClick={this.goToCreatePL}>
            <img src={logo_claro} alt={'logo'} />
            <h2>Labefy</h2>
          </ContainerLogo>
          <ContainerMenu>
            <div onClick={this.goToCreatePL}>Criar Playlist</div>
            <div onClick={this.goToPLlist}>Suas Playlists</div>
          </ContainerMenu>
        </ContainerHeader>
        <ContainerMain>
          {this.choosePage()}
        </ContainerMain>
      </MainDiv>
    )
  }
}

