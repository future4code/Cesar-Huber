import React, { useState, useEffect } from 'react'
import { getTrips } from '../components/api_connections'
import {useHistory} from 'react-router-dom'
import { MainContainer } from '../constants/styles'

export default function ApplicationFormPage(props) {

    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const renderTripsNames = trips.map(trip => {
        return <option>{trip.name}</option>
    })

    return (
        <MainContainer>
            Aqui é o form para aplicar à viagem
            <hr/>
            Vai ter um form com o nome da viagem pre-selecionado com base no id da viagem {props.applicationId}
            <select>
                {renderTripsNames}
            </select>
            <input placeholder={'Nome'} />
            demais inputs...
            <button onClick={goBack}>voltar</button>
            <button onClick={() => console.log('form aplicado')}>aplicar</button>
        </MainContainer>
    )
}
