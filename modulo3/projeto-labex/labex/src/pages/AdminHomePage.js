import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { MainContainer, ButtonsContainer, TripCardContainer, StyledAdminButton, StyledGoBackButton, StyledLogoutButton, TripCardContainerName } from '../constants/styles'
import { getTrips, deleteTrip } from '../components/api_requests'
import inactiveIcon from '../img/trash-bin_black.png'

export default function AdminHomePage(props) {

    useProtectedPage()

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const goBack = () => {
        if (token === null) {
            history.goBack()
        } else {
            history.push('/')
        }
    }

    const logout = () => {
        localStorage.clear()
        history.push('/login')
    }

    const goToCreateTrip = () => {
        history.push('/createtrip')
    }

    const goToTripDetail = (id) => {
        history.push(`/tripdetail/${id}`)
    }

    const renderTrips = trips.map((trip) => {
        return (
            <TripCardContainer key={trip.id}> 
                <TripCardContainerName onClick={() => { goToTripDetail(trip.id) }}>
                    {trip.name}
                </TripCardContainerName>
                <div onClick={() => { deleteTrip(trip.id, getTrips, setTrips) }}>
                    <img src={inactiveIcon} alt={'Ícone inativo'} />
                </div>
            </TripCardContainer>
        )
    })

    return (
        <MainContainer>
            <ButtonsContainer>
                <StyledGoBackButton onClick={goBack}>Voltar</StyledGoBackButton>
                <StyledAdminButton onClick={goToCreateTrip}>Criar Viagem</StyledAdminButton>
                <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
            </ButtonsContainer>
            <h3>Lista das Viagens</h3>
            {renderTrips}
        </MainContainer>
    )
}
