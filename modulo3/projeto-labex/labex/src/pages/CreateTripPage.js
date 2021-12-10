import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage, useForm } from '../components/hooks/custom_hooks'
import { MainContainer, StyledForm } from '../constants/styles'
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

    console.log(renderedPlanets)

    return (
        <MainContainer>
            Aqui é a página para criar uma nova Viagem
            <StyledForm onSubmit={create}>
                <input
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    placeholder={'nome da viagem'}
                    required
                />
                <select name={'planet'} onChange={onChange}>
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
                />
                <input
                    name={'description'}
                    value={form.description}
                    onChange={onChange}
                    placeholder={'descrição'}
                    required
                />
                <input
                    name={'durationInDays'}
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder={'duração (dias)'}
                    required
                />
                <button>Criar Viagem</button>
            </StyledForm>
            <button onClick={goBack}>Voltar</button>
        </MainContainer>
    )
}
