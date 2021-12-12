import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage, useForm } from '../components/hooks/custom_hooks'
import { MainContainer, StyledForm, StyledGoBackButton, ApplicationContainer } from '../constants/styles'
import { postCreateTrip } from '../components/api_requests'
import { planets } from '../constants/planets_list'

export default function CreateTripPage(props) {

    useProtectedPage()

    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    const create = (event) => {
        event.preventDefault();
        postCreateTrip(form);
        cleanFields();
    };

    const goBack = () => {
        history.goBack()
    }

    const renderedPlanets = planets.map((planet, index) => {
        return <option key={index} value={planet}>{planet}</option>
    })

    return (
        <MainContainer>
            <ApplicationContainer>
                Crie aqui uma nova viagem preenchendo os campos abaixo:
            </ApplicationContainer>
            <StyledForm onSubmit={create}>
                <input
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    placeholder={'nome da viagem'}
                    required
                    pattern={"^.{8,}"}
                    title={'Insira um nome com pelo menos 8 caracteres'}
                />
                <select name={'planet'} onChange={onChange} required>
                    <option selected disabled>Escolha um planeta</option>
                    {renderedPlanets}
                </select>
                <input
                    name={'date'}
                    value={form.date}
                    onChange={onChange}
                    placeholder={'data'}
                    required
                    type={'date'}
                    title={'Informe uma data válida'}
                />
                <input
                    name={'description'}
                    value={form.description}
                    onChange={onChange}
                    placeholder={'descrição'}
                    required
                    pattern={"^.{20,}"}
                    title={'Informe uma descrição mais detalhada com pelo menos 20 caracteres'}
                />
                <input
                    name={'durationInDays'}
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder={'duração (dias)'}
                    required
                    type={'number'}
                    min={5}
                />
                <button>Criar Viagem</button>
            </StyledForm>
            <StyledGoBackButton onClick={goBack}>Voltar</StyledGoBackButton>
        </MainContainer>
    )
}
