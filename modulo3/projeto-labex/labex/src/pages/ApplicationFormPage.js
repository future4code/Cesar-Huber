import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function ApplicationFormPage(props) {
    return (
        <MainContainer>
            Aqui é o form para aplicar à viagem
            <hr/>
            Vai ter um form com o nome da viagem pre-selecionado com base no id da viagem {props.applicationId}
            <select>
                <option>viagem1</option>
                <option>viagem2</option>
                <option>viagem3</option>
            </select>
            <input placeholder={'Nome'} />
            demais inputs...
            <button onClick={() => {props.goToListTrips()}}>voltar</button>
        </MainContainer>
    )
}
