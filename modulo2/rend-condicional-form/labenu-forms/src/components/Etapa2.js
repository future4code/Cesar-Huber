import React from 'react'
import styled from 'styled-components'

export default function Etapa2() {

    const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    return (
        <MainContainer>
            <h1>ETAPA 2 - Informações Ensino Superior</h1>
            <h2>1. Qual curso?</h2>
            <input />
            <h2>2. Qual a unidade de ensino?</h2>
            <input />
        </MainContainer>
    )
}