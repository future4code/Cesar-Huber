import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function HomePage(props) {
    return (
        <MainContainer>
            Aqui é a Home
            <button onClick={() => {props.goToListTrips()}}>Lista de Viagens</button>
            <button onClick={() => {props.goToLogin()}}>Área Administrativa</button>
        </MainContainer>
    )
}
