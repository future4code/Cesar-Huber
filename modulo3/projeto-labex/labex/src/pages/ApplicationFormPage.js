import React, { useState, useEffect } from 'react'
import { getTrips, postApplication } from '../components/api_requests'
import { useHistory, useParams } from 'react-router-dom'
import { MainContainer, StyledForm, ApplicationContainer, StyledGoBackButton } from '../constants/styles'
import { useForm } from '../components/hooks/custom_hooks'
import { countries } from '../constants/countries_list'

export default function ApplicationFormPage(props) {

    const pathParams = useParams()
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [selectedTripId, setSelectedTripId] = useState('')

    useEffect(() => {
        getTrips(setTrips)
        setSelectedTripId(pathParams.id)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const handleSelectedTrip = (id) => {
        setSelectedTripId(id)
    }

    const { form, onChange, cleanFields } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: ''
    });

    const renderTripsNames = trips.map(trip => {
        if (trip.id === pathParams.id) {
            return <option selected="selected" key={trip.id} value={trip.id} onChange={() => { handleSelectedTrip(trip.id) }}>{trip.name}</option>
        } else {
            return <option key={trip.id} value={trip.id} onChange={() => { handleSelectedTrip(trip.id) }}>{trip.name}</option>
        }
    })

    const sendForm = (event) => {
        event.preventDefault();
        postApplication(selectedTripId, form);
        cleanFields();
    };

    return (
        <MainContainer>
            <ApplicationContainer>
                Confirme a escolha da viagem:
                <select>
                    {renderTripsNames}
                </select>
            </ApplicationContainer>

            <StyledForm onSubmit={sendForm}>
                <input
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    placeholder={'Nome'}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name={'age'}
                    value={form.age}
                    onChange={onChange}
                    placeholder={'Idade'}
                    required
                    type={'number'}
                    min={'18'}
                />
                <input
                    name={'applicationText'}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder={'Por que você?'}
                    required
                    pattern={"^.{30,}"}
                    title={"O texto precisa ter pelo menos 30 caracteres. Tem que convencer a gente que você merece poxa."}
                />
                <input
                    name={'profession'}
                    value={form.profession}
                    onChange={onChange}
                    placeholder={'Profissão'}
                    required
                    pattern={"^.{3,}"}
                />
                {countries(onChange)}
                <button onClick={sendForm}>Candidata eu!</button>
            </StyledForm>

            <StyledGoBackButton onClick={goBack}>Voltar</StyledGoBackButton>
        </MainContainer>
    )
}
