import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function LoginPage(props) {
    return (
        <MainContainer>
            Aqui é a página de Login
            <input placeholder={'e-mail'} />
            <input placeholder={'nome'} />
            <button onClick={() => {props.goToHome()}}>Voltar</button>
            <button onClick={() => {props.goToAdminHome()}}>Login</button>
        </MainContainer>
    )
}
