import React from 'react'
import { useNavigate } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { HeaderMainContainer, HeaderLogoContainer, HeaderUserContainer, LoginButton, RegisterButton } from './styles';

export default function Header() {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const goToHome =() => {
        navigate('/')
    }

    return (
        <HeaderMainContainer>
            <HeaderLogoContainer onClick={goToHome}>
                <SmartToyIcon />
                <h2>Labeddit</h2>
            </HeaderLogoContainer>
            <HeaderUserContainer>
                <LoginButton onClick={goToLogin}>Login</LoginButton>
                <RegisterButton onClick={goToSignup}>Cadastre-se</RegisterButton>
            </HeaderUserContainer>
        </HeaderMainContainer>
    )
}
