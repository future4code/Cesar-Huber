import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function LoginPage(props) {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToAdmin = () => {
        history.push('/admin')
    }

    return (
        <MainContainer>
            Aqui é a página de Login
            <input placeholder={'e-mail'} />
            <input placeholder={'nome'} />
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdmin}>Login</button>
        </MainContainer>
    )
}
