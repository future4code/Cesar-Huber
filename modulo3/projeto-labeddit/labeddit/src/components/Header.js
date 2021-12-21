import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { HeaderMainContainer, HeaderLogoContainer, HeaderSecondaryContainer, HeaderUserContainer, HeaderSearchBarContainer, LoginButton, RegisterButton, LogoutButton } from './styles';

export default function Header(props) {

    const navigate = useNavigate()

    const pathname = window.location.pathname
    const token = localStorage.getItem('token')
    const [darkMode, setDarkMode] = useState(false)

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const goToHome = () => {
        navigate('/')
    }

    const logout = () => {
        localStorage.clear()
        goToLogin()
    }

    return (
        <HeaderMainContainer>
            <HeaderLogoContainer onClick={goToHome}>
                <SmartToyIcon />
                <h2>Labeddit</h2>
            </HeaderLogoContainer>

            <HeaderSearchBarContainer>
                <input
                    placeholder='pesquisa'
                    onChange={props.handleSearchBar}
                    value={props.searchFor}
                />
            </HeaderSearchBarContainer>
            <HeaderUserContainer>
                {token === null && pathname !== '/login' ? <LoginButton onClick={goToLogin}>Login</LoginButton> : ''}
                {token === null && pathname === '/login' ? <RegisterButton onClick={goToSignup}>Cadastre-se</RegisterButton> : ''}
                {token !== null ? <LogoutButton onClick={logout}>Logout</LogoutButton> : ''}
            </HeaderUserContainer>
        </HeaderMainContainer>
    )
}
