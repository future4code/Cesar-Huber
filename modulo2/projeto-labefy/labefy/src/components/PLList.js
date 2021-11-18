import axios from 'axios'
import React, { Component } from 'react'
import { ContainerPLList, EachPlaylist } from '../styles'
import PLDetails from './PLDetails'

export default class PLList extends Component {

    state = {
        playlists: [],
        page: 'PLList',
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
        this.setState({ page: 'PLDetails' })
        this.setState({ playlistDetailId: id })
        this.setState({ playlistDetailName: name})
    }

    choosePage = () => {
        switch (this.state.page) {
            case 'PLList':
                return <ContainerPLList>
                    {this.playlistsList()}
                </ContainerPLList>
            case 'PLDetails':
                return <PLDetails 
                    id={this.state.playlistDetailId}
                    name={this.state.playlistDetailName}
                    goToPLList={this.goToPLList}
                />
            default:
                return <div>Erro! Página não encontrada :(</div>
        }
    }

    render() {
        console.log(this.state.playlists)
        return (
            this.choosePage()
        )
    }
}
