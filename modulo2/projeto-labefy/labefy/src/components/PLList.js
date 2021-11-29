import axios from 'axios'
import React, { Component } from 'react'
import { ContainerPLList, EachPlaylist, ContainerHeader, ContainerLogo, ContainerMenu } from '../styles'
import logo_claro from '../img/musica_clara.png'
import PLDetails from './PLDetails'

export default class PLList extends Component {

    state = {
        playlists: [],
        page: 'PLlist',
        playlistDetailId: '',
        playlistDetailName: ''
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {
                    Authorization: 'cesar-huber-carver'
                }
            })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert('Encontramos um erro. Tente novamente mais tarde.')
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: 'cesar-huber-carver'
            }
        }).then((res) => {
            alert('Playlist excluída com sucesso')
            this.getAllPlaylists()
            this.props.getQtyAllPlaylists()
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }

    playlistsList = () => this.state.playlists.map(pl => {
        return <EachPlaylist>
            <li
                key={pl.id}
                onClick={() => this.goToPLDetails(pl.id, pl.name)}
            >
                {pl.name}
            </li>
            <button onClick={() => this.deletePlaylist(pl.id)}>Excluir Playlist</button>
        </EachPlaylist>
    })

    goToPLDetails = (id, name) => {
        this.setState({ page: 'PLDetails', playlistDetailId: id, playlistDetailName: name })
    }

    goToPLlist = () => {
        console.log("cliquei botão suas playlists:", this.state.page)
        this.setState({ page: 'PLlist' })
      }

    choosePage = () => {
        switch (this.state.page) {
            case 'PLlist':
                return <ContainerPLList>
                    <ContainerHeader>
                        <ContainerLogo onClick={this.props.goToCreatePL}>
                            <img src={logo_claro} alt={'logo'} />
                            <h1>Labefy</h1>
                        </ContainerLogo>
                        <ContainerMenu>
                            <div onClick={this.props.goToCreatePL}>Criar Playlist</div>
                            <div onClick={this.goToPLlist}>Suas Playlists</div>
                        </ContainerMenu>
                    </ContainerHeader>
                    {this.playlistsList()}
                </ContainerPLList>
            case 'PLDetails':
                return <PLDetails
                    id={this.state.playlistDetailId}
                    name={this.state.playlistDetailName}
                    goToPLlist={this.goToPLlist}
                />
            default:
                return <div>Erro! Página não encontrada :(</div>
        }
    }

    render() {
        console.log(this.state.playlists)
        console.log(this.state.page)
        return (
            this.choosePage()
        )
    }
}
