import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function ListTripsPage(props) {
    return (
        <MainContainer>
            Aqui é a Lista de Viagens
            <button onClick={() => {props.goToHome()}}>Voltar</button>
            <ul>
                <li onClick={() => {props.goToApplicationForm('id_temporário_1')}}>Viagem 1</li>
                <li onClick={() => {props.goToApplicationForm('id_temporário_2')}}>Viagem 2</li>
                <li onClick={() => {props.goToApplicationForm('id_temporário_3')}}>Viagem 3</li>
            </ul>
        </MainContainer>
    )
}
