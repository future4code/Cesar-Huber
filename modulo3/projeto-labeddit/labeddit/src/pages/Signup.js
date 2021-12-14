import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../components/APIRequests'

export default function Signup() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            Aqui é a tela de cadastro.
            <input placeholder='Nome' />
            <input placeholder='email' />
            <input placeholder='senha' />
            <button onClick={signUp}>Cadastrar</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}
