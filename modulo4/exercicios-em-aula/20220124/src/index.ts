import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json()) // vamos nos comunicar usando arquivos json
app.use(cors()) // vamos habilitar o cors

app.get('/', (req, res) => { // get = método da requisição, res = response da requisição, req = requisição do frontend
    console.log('BATEU')
    console.log(req.headers)
    console.log(req.body)

    res.status(200).send('Ok') // primeiro status, depois send, send encerra a requisição
})

app.get('/amora/:madura', (req, res) => {
    console.log('BATEU')
    console.log(req.params.madura) // referente às path params /: na url
    console.log(req.query['chave']) // referente às query params ? na url -> ...com/amora?madura=madura

    res.status(200).send('Ok Amora')
})

app.get('/banana', (req, res) => { 
    console.log('BATEU')

    res.status(200).send('Ok Banana')
})

app.listen(3003, () => {
    console.log('servidor de pé na porta 3003')
})