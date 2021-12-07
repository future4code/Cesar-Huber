import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import logo from '../img/logo.png'
import { useHistory } from 'react-router-dom'

const MainContainer = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, ${COLORS.xwhiteish}, ${COLORS.xgreyish});
    h1{
        margin: 15px;
        font-size: calc(25px + 15 * ((100vw - 345px) / (1200 - 345)));
        color: ${COLORS.xwhiteish};
        text-shadow: 2px 2px 5px ${COLORS.xgreyish};
        font-weight: 100;
        text-align: center;
    }
    img{
        margin: 10px;
        height: 30vw;
        border-radius: 800px;
        box-shadow: 10px 10px 10px ${COLORS.xredish}
    }
`

const StyledWord = styled.span`
    color: ${COLORS.xyellowish};
    font-style: italic;
    text-shadow: 2px 2px 5px ${COLORS.xgreyish};
    font-weight: 400;
`

const ButtonsContainer = styled.div`
    margin: 10px;
    width: 60%;
    display: flex;
    justify-content: space-around;
`

const StyledButtonTeal = styled.button`
    border: none;
    background-color: ${COLORS.xwhiteish};
    color: ${COLORS.xgreyish};
    margin: 10px;
    padding: 7px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: calc(20px + 10 * ((100vw - 345px) / (1200 - 345)));
    font-weight: 100;
    transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: ${COLORS.xtealish};
        color: ${COLORS.xwhiteish}
    }
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
