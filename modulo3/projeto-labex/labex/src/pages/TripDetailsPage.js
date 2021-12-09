import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { getTripDetail } from '../components/api_connections'
import { MainContainer } from '../constants/styles'

// fazer o card para cada candidato, com um resumo do form preenchido

export default function TripDetailsPage() {

    useProtectedPage()

    const history = useHistory()
    const pathParams = useParams()

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getTripDetail(pathParams.id)
    }, [])

    return (
        <MainContainer>
            Aqui vem o detalhe da viagem, com os candidatos requerentes e aprovados
            ID da viagem: {pathParams.id}
            <button onClick={goBack}>Voltar</button>
        </MainContainer>
    )
}
