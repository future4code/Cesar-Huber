import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Post() {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goBack = () => {
        navigate.goBack()
    }

    return (
        <div>
            Página de Post
            <button onClick={goToHome}>Home</button>
            <button onClick={goBack}>Voltar</button>

        </div>
    )
}
