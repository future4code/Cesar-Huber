import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { getTripDetail } from '../components/api_requests'
import { MainContainer, StyledGoBackButton } from '../constants/styles'
import TripCardDetails from '../components/TripCardDetails'
import Candidates from '../components/Candidates'
import ApprovedCandidates from '../components/ApprovedCandidates'
import { decideCandidate } from '../components/api_requests'

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

    const renderCandidates = () => {
        return tripDetails.candidates && tripDetails.candidates.map((candidate) => {
            return (
                <Candidates 
                name={candidate.name}
                profession={candidate.profession}
                age={candidate.age}
                country={candidate.country}
                applicationText={candidate.applicationText}
                candidateId={candidate.id}
                tripId={tripDetails.id}
                decideCandidate={decideCandidate}
                getTripDetail={getTripDetail}
                setTripDetails={setTripDetails}
                key={candidate.id}
            />
            )
        })
    }


    const renderApproved = () => {
        return tripDetails.approved && tripDetails.approved.map((candidate) => {
            return (
                <ApprovedCandidates 
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
            <h3>Viagem Selecionada</h3>
            {renderTripDetails()}
            <StyledGoBackButton onClick={goBack}>Voltar</StyledGoBackButton>
            <h3>Candidatos</h3>
            {renderCandidates()}
            <h3>Aprovados</h3>
            {renderApproved()}
        </MainContainer>
    )
}
