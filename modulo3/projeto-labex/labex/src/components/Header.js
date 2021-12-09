import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import {COLORS} from '../constants/styles'
import { useHistory } from 'react-router-dom'

const MainContainer = styled.div`
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(45deg, #111, #393939);
    cursor: pointer;
    img{
        box-shadow: 0 0 5px ${COLORS.xredish}
    }
`

export default function Header() {
    
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    return (
        <MainContainer onClick={goToHome}>
            <img src={logo} alt='logo' />
        </MainContainer>
    )
}
