import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import {COLORS} from '../constants/colors'

const MainContainer = styled.div`
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(45deg, #111, #393939);
    img{
        box-shadow: 0 0 5px ${COLORS.xredish}
    }
`

export default function Header() {
    return (
        <MainContainer>
            <img src={logo} alt='logo' />
        </MainContainer>
    )
}
