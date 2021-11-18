import axios from 'axios'
import React, { Component } from 'react'
import { PLDetailContainer, PLDetailHeaderContainer, TrackContainer, ContainerPlayPause, PLDetailAddContainer } from '../styles'
import play from '../img/play.png'
import pause from '../img/pause.png'

export default class PLDetails extends Component {

    state = {
        playlistTracks: [],
        playlistTracksQty: 0,
        newMusicName: '',
        newMusicArtist: '',
        newMusicURL: ''
    }

    componentDidMount() {
        this.getPlaylistDetails()
    }

    getPlaylistDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
            headers: {
                Authorization: 'cesar-huber-carver'
            }
        })
            .then((res) => {
                this.setState({ playlistTracks: res.data.result.tracks })
                this.setState({ playlistTracksQty: res.data.result.quantity })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    handleNewMusicNameChange = (e) => {
        this.setState({ newMusicName: e.target.value })
    }

    handleNewMusicArtistChange = (e) => {
        this.setState({ newMusicArtist: e.target.value })
    }

    handleNewMusicURLChange = (e) => {
        this.setState({ newMusicURL: e.target.value })
    }

    addTrackToPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const body =
        {
            name: this.state.newMusicName,
            artist: this.state.newMusicArtist,
            url: this.state.newMusicURL
        }
        axios.post(url, body, { headers: { Authorization: 'cesar-huber-carver' } })
            .then((res) => {
                alert('Música adicionada com sucesso')
                this.getPlaylistDetails()
                this.setState({ newMusicName: '' })
                this.setState({ newMusicArtist: '' })
                this.setState({ newMusicURL: '' })
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    render() {

        const playlistTracks = this.state.playlistTracks.map(track => {
            return <TrackContainer>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <ContainerPlayPause>
                    <img src={play} alt={'play'} />
                    <img src={pause} alt={'pause'} />
                </ContainerPlayPause>
            </TrackContainer>
        })

        return (
            <PLDetailContainer>
                <PLDetailHeaderContainer>
                    Suas músicas em <h2>{this.props.name}</h2>
                </PLDetailHeaderContainer>
                <PLDetailAddContainer>
                    <input
                        placeholder={'Nome da Música'}
                        value={this.state.newMusicName}
                        onChange={this.handleNewMusicNameChange}
                    />
                    <input
                        placeholder={'Nome do Artista'}
                        value={this.state.newMusicArtist}
                        onChange={this.handleNewMusicArtistChange}
                    />
                    <input
                        placeholder={'URL da Música'}
                        value={this.state.newMusicURL}
                        onChange={this.handleNewMusicURLChange}
                    />
                    <button onClick={() => this.addTrackToPlaylist(this.props.id)}>Adicionar</button>
                </PLDetailAddContainer>
                {playlistTracks.length > 0 ? playlistTracks : 'Ainda não há músicas nesta playlist'}
            </PLDetailContainer>
        )
    }
}
