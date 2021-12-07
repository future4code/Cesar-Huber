import React from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// fazer o card para cada candidato, com um resumo do form preenchido

export default function TripDetailsPage() {

    const history = useHistory()
    const pathParams = useParams()

    const goBack = () => {
        history.goBack()
    }

    return (
        <MainContainer>
            Aqui vem o detalhe da viagem, com os candidatos requerentes e aprovados
            <button onClick={goBack}>Voltar</button>
        </MainContainer>
    )
}
