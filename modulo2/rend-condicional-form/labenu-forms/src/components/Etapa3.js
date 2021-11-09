import React from 'react'
import styled from 'styled-components'

export default function Etapa3() {

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
            <h1>ETAPA 3 - Informações Gerais de Ensino</h1>
            <h2>1. Por que você não iniciou/terminou uma graduação?</h2>
            <input />
            <h2>2. Você fez algum curso complementar?</h2>
            <select>
                <option disabled selected value>-- escolha uma opção --</option>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
        </MainContainer>
    )
}
