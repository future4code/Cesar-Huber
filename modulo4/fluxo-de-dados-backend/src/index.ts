import express, { Request, Response } from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => { console.log('Servidor ON: 3003') })

// criar novo produto e devolver a lista atualizada

app.post('/products', (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        const id = Date.now()

        if (price <= 0) { throw new Error('O preço não pode ser menor ou igual a zero.') }
        if (!name || !price) { throw new Error('Algum dos parâmetros (name ou price) estão faltando.') }

        products.push({
            id: id,
            name: name,
            price: price
        })

        res.status(200).send(products)
    }
    catch (error: any) {
        switch (error.message) {
            case 'Algum dos parâmetros (name ou price) estão faltando.':
                res.statusCode = 422
            case 'O preço não pode ser menor ou igual a zero.':
                res.statusCode = 422
            default:
                res.statusCode = 500
        }

        res.send(error.message)
    }

})

app.get('/products', (req: Request, res: Response) => {
    try { res.status(200).send(products) }
    catch (error: any) { res.status(500).send('Ocorreu um erro inesperado') }
})

app.put('/products/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { price } = req.body

        if (!id) { throw new Error('id do produto não informado') }
        if (price <= 0) { throw new Error('O preço não pode ser menor ou igual a zero') }
        if (typeof (price) !== typeof (1)) { throw new Error('O preço informado deve ser um número') }
        if (!price) { throw new Error('Está faltando informar o preço no body') }

        let isProductFound = false

        products.forEach(product => {
            if (product.id === id) {
                product.price = price
                isProductFound = true
            }
        })

        if (!isProductFound) { throw new Error('Produto não encontrado') }

        res.status(200).send(products)

    } catch (error: any) {
        switch (error.message) {
            case 'id do produto não informado':
                res.statusCode = 422
            case 'O preço não pode ser menor ou igual a zero':
                res.statusCode = 422
            case 'O preço informado deve ser um número':
                res.statusCode = 422
            case 'Está faltando informar o preço no body':
                res.statusCode = 422
            case 'Produto não encontrado':
                res.statusCode = 404
            default:
                res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.delete('/products/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        let isProductFound = false

        const productIndex = products.findIndex(product => {
            if (product.id === id) {
                isProductFound = true
                return product}
        })

        if (!isProductFound) {throw new Error('Produto não encontrado')}

        products.splice(productIndex, 1)

        res.status(200).send(products)

    } catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado':
                res.statusCode = 404
            default:
                res.statusCode = 500
        }
    }
})