import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { getTripDetail } from '../components/api_requests'
import { MainContainer } from '../constants/styles'
import TripCardDetails from '../components/TripCardDetails'
import Candidates from '../components/Candidates'

// fazer o card para cada candidato, com um resumo do form preenchido

export default function TripDetailsPage() {

    useProtectedPage()

    const history = useHistory()
    const pathParams = useParams()
    const [tripDetails, setTripDetails] = useState({})

    useEffect(() => {
        getTripDetail(pathParams.id, setTripDetails)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const renderTripDetails = () => {
        return (
            <TripCardDetails 
                date={tripDetails.date}
                description={tripDetails.description}
                duration={tripDetails.durationInDays}
                name={tripDetails.name}
                planet={tripDetails.planet}
                key={tripDetails.id}
            />
        )
    }
    console.log('lista de candidatos: ', tripDetails.candidates)
    const renderCandidates = () => {
        return tripDetails.candidates && tripDetails.candidates.map((candidate) => {
            return (
                <Candidates 
                name={candidate.name}
                profession={candidate.profession}
                age={candidate.age}
                country={candidate.country}
                applicationText={candidate.applicationText}
                id={candidate.id}
                key={candidate.id}
            />
            )
        })
    }

    return (
        <MainContainer>
            Aqui vem o detalhe da viagem, com os candidatos requerentes e aprovados
            <button onClick={goBack}>Voltar</button>
            {renderTripDetails()}
            <h3>Candidatos</h3>
            {renderCandidates()}
        </MainContainer>
    )
}
