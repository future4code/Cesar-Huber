import React from 'react'
import styled from 'styled-components'

export default function Etapa1() {

    const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    let NivelEscolaridade = ""

    const SelecaoEscolaridade = (props) => {
        return NivelEscolaridade = Number(props.value)
    }

    return (
        <MainContainer>
            <h1>ETAPA 1 - Dados Gerais</h1>
            <h2>1. Qual o seu nome?</h2>
            <input />
            <h2>2. Qual a sua idade?</h2>
            <input />
            <h2>3. Qual o seu email?</h2>
            <input />
            <h2>4. Qual a sua escolaridade?</h2>
            <select onSelect={SelecaoEscolaridade}>
                <option disabled selected value> -- Escolha uma opção -- </option>
                <option value="1">Ensino Médio Incompleto</option>
                <option value="2">Ensino Médio Completo</option>
                <option value="3">Ensino Superior Incompleto</option>
                <option value="4">Ensino Superior Completo</option>
            </select>
        </MainContainer>
    )
}