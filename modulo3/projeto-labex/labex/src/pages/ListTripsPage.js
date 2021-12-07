import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function ListTripsPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplication = (id) => {
        history.push(`/application/${id}`)
    }

    return (
        <MainContainer>
            Aqui é a Lista de Viagens
            <button onClick={goBack}>Voltar</button>
            <ul>
                <li onClick={() => {goToApplication('id_temporário_1')}}>Viagem 1</li>
                <li onClick={() => {goToApplication('id_temporário_2')}}>Viagem 2</li>
                <li onClick={() => {goToApplication('id_temporário_3')}}>Viagem 3</li>
            </ul>
        </MainContainer>
    )
}
