import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeMainContainer } from './styles'

export default function Home() {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    return (
        <HomeMainContainer>
            Aqui é a Home
            Apenas usuários logados podem visualizar posts
        </HomeMainContainer>
    )
}
