import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Login } from '../components/api_requests'
import { MainContainer } from '../constants/styles'
import { useSkipLogin } from '../components/hooks/custom_hooks'

export default function LoginPage() {

    useSkipLogin()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    return (
        <MainContainer>
            Você precisa estar logado para acessar esta página
            <input 
                type={'email'}
                placeholder={'e-mail'} 
                value={email}
                onChange={handleEmailInput}
            />
            <input 
                type={'password'}
                placeholder={'senha'} 
                value={password}
                onChange={handlePasswordInput}
            />
            <button onClick={goBack}>Voltar</button>
            <button onClick={() => {Login(email, password, history)}}>Login</button>
        </MainContainer>
    )
}
