import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/styles'
import logo from '../img/logo.png'
import { useHistory } from 'react-router-dom'
import { MainContainer, ButtonsContainer, StyledButtonTeal } from '../constants/styles'


const StyledWord = styled.span`
    color: ${COLORS.xyellowish};
    font-style: italic;
    text-shadow: 2px 2px 5px ${COLORS.xgreyish};
    font-weight: 400;
`

export default function HomePage() {

    const history = useHistory()

    const goToListTrips = () => {
        history.push('/listtrips')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    return (
        <MainContainer>
            <img src={logo} alt='logo' />
            <h1>A sua primeira agência de turismo <StyledWord>espacial</StyledWord></h1>
            <ButtonsContainer>
                <StyledButtonTeal title={'vai para a lista de viagens'} onClick={goToListTrips}>Lista de Viagens</StyledButtonTeal>
                <StyledButtonTeal title={'faça login para acessar'} onClick={goToLogin}>Área Administrativa</StyledButtonTeal>
            </ButtonsContainer>
        </MainContainer>
    )
}
