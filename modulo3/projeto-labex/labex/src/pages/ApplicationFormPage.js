import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function ApplicationFormPage(props) {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

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
            <button onClick={goBack}>voltar</button>
            <button onClick={() => console.log('form aplicado')}>aplicar</button>
        </MainContainer>
    )
}
