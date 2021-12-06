import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonsContainer = styled.div`
    margin: 10px;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

// criar card para cada uma das viagens
const TripCardContainer = styled.div`
    margin: 10px;
    padding: 3px 10px;
    border: 1px solid black;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function AdminHomePage(props) {
    return (
        <MainContainer>
            Aqui é a home do Admin
            <ButtonsContainer>
                <button onClick={() => {props.goToHome()}}>Voltar</button>
                <button onClick={() => {props.goToCreateTrip()}}>Criar Viagem</button>
                <button>Logout</button>
            </ButtonsContainer>
            <TripCardContainer>
                {'Viagem 1'}
                <button>x</button>
            </TripCardContainer>
            <TripCardContainer>
                {'Viagem 2'}
                <button>x</button>
            </TripCardContainer>
            <TripCardContainer>
                {'Viagem 3'}
                <button>x</button>
            </TripCardContainer>
        </MainContainer>
    )
}
