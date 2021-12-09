import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { MainContainer } from '../constants/styles'

export default function CreateTripPage(props) {

    useProtectedPage()

    const history = useHistory()
    const [body, setBody] = useState({})

    const goBack = () => {
        history.goBack()
    }

    const createBody = () => {
        setBody({
            name: '',
            planet: '',
            date: '',
            description: '',
            durationInDays: ''
        })
    }

    return (
        <MainContainer>
            Aqui é a página para criar uma nova Viagem
            <input 
                placeholder={'nome da viagem'} 
            />
            <input placeholder={'descrição da viagem'} />
            <input placeholder={'duração da viagem'} />
            <button onClick={goBack}>Voltar</button>
            <button onClick={() => {console.log('viagem criada - falta API!!!')}}>Criar Viagem</button>
        </MainContainer>
    )
}
