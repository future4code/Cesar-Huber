import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginMainContainer, StyledTitle, StyledForm, InputsContainer, StyledInputs, SubmitButton, GoBackButton, IndividualInputContainer, StyledSignUpContainer } from './styles'
import { useForm } from '../../hooks/useForm'
import { login } from '../../components/APIRequests'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'

export default function Login() {

    const navigate = useNavigate()

    const goToFeed = () => {
        navigate('/')
    }

    const goBack = () => {
        navigate(-1)
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const { form, onChange, cleanFields } = useForm({
        email: '',
        password: ''
    });

    const submitLogin = (e) => {
        e.preventDefault()
        login(form, goToFeed)
        cleanFields()
    }


    return (
        <LoginMainContainer>
            <StyledTitle>Faça seu login</StyledTitle>
            <StyledForm onSubmit={submitLogin}>
                <InputsContainer>
                    <IndividualInputContainer>
                        <AlternateEmailIcon />
                        <StyledInputs
                            name={'email'}
                            type={'email'}
                            value={form.email}
                            placeholder='e-mail'
                            onChange={onChange}
                            required
                        />
                    </IndividualInputContainer>
                    <IndividualInputContainer>
                        <PasswordIcon />
                        <StyledInputs
                            name={'password'}
                            type={'password'}
                            value={form.password}
                            placeholder='senha'
                            onChange={onChange}
                            required
                        />
                    </IndividualInputContainer>
                </InputsContainer>
                <SubmitButton onClick={submitLogin}>Login</SubmitButton>
            </StyledForm>
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
            <StyledSignUpContainer>
                Ainda não tem cadastro? <span onClick={goToSignup}>Cadastre-se</span>
            </StyledSignUpContainer>
        </LoginMainContainer>
    )
}
