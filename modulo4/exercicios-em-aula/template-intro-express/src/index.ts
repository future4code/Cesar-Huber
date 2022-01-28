import express from 'express'
import cors from 'cors'
import { users } from './data'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {console.log('Servidor disponível na porta 3003')})

app.get('/playlists', (req, res) => {
    const currentUsers = users

    const userPlaylists = currentUsers.map(user => {return user.playlists})

    const result = userPlaylists.flat(1)

    res.status(200).send(result)
})

app.get('/tracks', (req, res) => {
    const playlistId = req.query.playlistId

    if (!playlistId) {res.status(400).send('Erro, falta id.')}


    const result = users.map(user => {return user.playlists}).flat(1).filter(playlist => {if (playlist.id === playlistId) {return playlist}})

    res.status(200).send(result)
})

app.delete('/playlist/:id', (req, res) => {
    const playlistIdDelete = req.params.id

    
})