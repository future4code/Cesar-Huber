import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../components/APIRequests'
import { SignupMainContainer, StyledTitle, StyledForm, InputsContainer, IndividualInputContainer, StyledInputs, SubmitButton, GoBackButton } from './styles'
import { useForm } from '../../hooks/useForm'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'


export default function Signup() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToFeed = () => {
        navigate('/')
    }

    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const register = (e) => {
        e.preventDefault()
        signUp(form, goToFeed)
        cleanFields()
    }

    return (
        <SignupMainContainer>
            <StyledTitle>
                Faça seu cadastro
            </StyledTitle>
            <StyledForm onSubmit={register}>
                <InputsContainer>
                    <IndividualInputContainer>
                        <AccountBoxIcon />
                        <StyledInputs
                            name={'username'}
                            value={form.username}
                            onChange={onChange}
                            placeholder='nome de usuário'
                            pattern={'^.{5,20}'}
                            title={'O nome de usuário deve ter entre 5 e 20 caracteres.'}
                            required
                        />
                    </IndividualInputContainer>
                    <IndividualInputContainer>
                        <AlternateEmailIcon />
                        <StyledInputs
                            type={'email'}
                            name={'email'}
                            value={form.email}
                            onChange={onChange}
                            placeholder='email'
                            required
                        />
                    </IndividualInputContainer>
                    <IndividualInputContainer>
                        <PasswordIcon />
                        <StyledInputs
                            type={'password'}
                            name={'password'}
                            value={form.password}
                            onChange={onChange}
                            placeholder='senha'
                            pattern={'^.{8,30}'}
                            title={'A senha deve ter entre 8 e 30 caracteres.'}
                            required
                        />
                    </IndividualInputContainer>
                </InputsContainer>
                <SubmitButton onClick={register}>Cadastrar</SubmitButton>
            </StyledForm>
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
        </SignupMainContainer>
    )
}
