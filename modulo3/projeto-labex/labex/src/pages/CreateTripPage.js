import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        margin: 5px;
        padding: 3px 7px;
    }
    button{
        margin: 5px;
        padding: 3px 7px;
    }
`

export default function CreateTripPage(props) {
    return (
        <MainContainer>
            Aqui é a página para criar uma nova Viagem
            <input placeholder={'nome da viagem'} />
            <input placeholder={'descrição da viagem'} />
            <input placeholder={'duração da viagem'} />
            <button onClick={() => {props.goToAdminHome()}}>Voltar</button>
            <button onClick={() => {console.log('viagem criada - falta API!!!')}}>Criar Viagem</button>
        </MainContainer>
    )
}
