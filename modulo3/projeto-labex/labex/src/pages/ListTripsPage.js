import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { getTrips } from '../components/api_requests'
import TripCard from '../components/TripCard'
import { MainContainer } from '../constants/styles'

export default function ListTripsPage() {

    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const goToApplication = (id) => {
        history.push(`/application/${id}`)
    }

    const renderTrips = trips.map((trip) => {
        return (
            <TripCard 
                date={trip.date}
                description={trip.description}
                duration={trip.durationInDays}
                name={trip.name}
                planet={trip.planet}
                goToApplication={() => {goToApplication(trip.id)}}
                history={history}
                key={trip.id}
            />
        )
    })

    return (
        <MainContainer>
            <h3>Aqui você encontra as viagens disponíveis!</h3>
            <p>Devido à pandemia, todas as viagens sofreram atraso de 2 anos na data de partida.</p>
            <p>Clique no card da viagem desejada para se candidatar</p>
            <button onClick={goBack}>Voltar</button>
                {renderTrips}
        </MainContainer>
    )
}
