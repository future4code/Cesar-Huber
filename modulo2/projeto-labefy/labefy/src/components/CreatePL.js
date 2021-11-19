import React from 'react'
import { ContainerCreatePL, ContainerHeader, ContainerLogo, ContainerMenu } from '../styles'
import logo_claro from '../img/musica_clara.png'

export default class CreatePL extends React.Component {

    state = {
        newPlaylistName: ''
    }

    handleNewPlaylistNameChange = (e) => {
        this.setState({ newPlaylistName: e.target.value })
    }

    render() {
        return (
            <ContainerCreatePL>
                <ContainerHeader>
                    <ContainerLogo onClick={this.props.goToCreatePL}>
                        <img src={logo_claro} alt={'logo'} />
                        <h1>Labefy</h1>
                    </ContainerLogo>
                    <ContainerMenu>
                        <div onClick={this.props.goToCreatePL}>Criar Playlist</div>
                        <div onClick={this.props.goToPLlist}>Suas Playlists</div>
                    </ContainerMenu>
                </ContainerHeader>
                {this.props.qtdPlaylists > 0 ?
                    <h3>Você tem {this.props.qtdPlaylists} playlist(s) criada(s)</h3>
                    :
                    <h3>Você ainda não tem nenhuma playlist criada =/</h3>
                }
                {this.props.qtdPlaylists > 0 ?
                    <h2>Crie mais uma Playlist</h2>
                    :
                    <h2>Crie a sua primeira Playlist</h2>
                }
                <input
                    placeholder={'Nome da Playlist'}
                    value={this.state.newPlaylistName}
                    onChange={this.handleNewPlaylistNameChange}
                />
                <button onClick={() => this.props.createNewPlaylist(this.state.newPlaylistName)}>Criar Playlist</button>
            </ContainerCreatePL>
        )
    }

}


