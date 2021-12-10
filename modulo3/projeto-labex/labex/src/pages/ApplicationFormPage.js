import React, { useState, useEffect } from 'react'
import { getTrips, postApplication } from '../components/api_requests'
import {useHistory, useParams} from 'react-router-dom'
import { MainContainer, StyledForm } from '../constants/styles'
import { useForm } from '../components/hooks/custom_hooks'

export default function ApplicationFormPage(props) {

    const pathParams = useParams()
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [selectedTripId, setSelectedTripId] = useState('')

    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const handleSelectedTrip = (id) => {
        console.log(id)
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
            return <option selected="selected" key={trip.id} value={trip.id} onChange={() => {handleSelectedTrip(trip.id)}}>{trip.name}</option>
        } else {
            return <option key={trip.id} value={trip.id} onChange={() => {handleSelectedTrip(trip.id)}}>{trip.name}</option>
        }
    })

    const sendForm = (event) => {
        event.preventDefault();
        postApplication(selectedTripId, form);
        cleanFields();
      };

    return (
        <MainContainer>
            Aqui é o form para aplicar à viagem
            <hr/>
            Vai ter um form com o nome da viagem pre-selecionado com base no id da viagem {props.applicationId}
            <select>
                {renderTripsNames}
            </select>

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
                    style={{height: '150px'}}
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
                />
                <input 
                    name={'country'}
                    value={form.country}
                    onChange={onChange}
                    placeholder={'Escolha um País'}
                    required
                />
                <button>Candidata eu!</button>
            </StyledForm>

            <button onClick={goBack}>Voltar</button>
        </MainContainer>
    )
}
