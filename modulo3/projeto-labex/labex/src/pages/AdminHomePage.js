import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { MainContainer, ButtonsContainer, TripCardContainer } from '../constants/styles'
import { getTrips, deleteTrip } from '../components/api_requests'
import activeIcon from '../img/trash-bin_red.png'
import inactiveIcon from '../img/trash-bin_black.png'

// criar card para cada uma das viagens


export default function AdminHomePage(props) {

    useProtectedPage()

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [trips, setTrips] = useState([])
    const [iconHovered, setIconHovered] = useState(false)

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
        history.push('/')
    }

    const goToCreateTrip = () => {
        history.push('/createtrip')
    }

    const goToTripDetail = (id) => {
        history.push(`/tripdetail/${id}`) 
        // CHECK: usar com o useParam depois na página do tripdetail para pegar a informação do id
    }

    const renderTrips = trips.map((trip) => {
        return (
            <TripCardContainer key={trip.id} onClick={() => {goToTripDetail(trip.id)}}>
                <p>{trip.name}</p>
                <div 
                    onMouseEnter={() => {setIconHovered(true)}} 
                    onMouseOut={() => {setIconHovered(false)}}
                    onClick={() => {deleteTrip(trip.id)}}
                >
                    {iconHovered ? 
                    <img src={activeIcon} alt={'Ícone ativo'} /> 
                    : 
                    <img src={inactiveIcon} alt={'Ícone inativo'} />
                    }
                </div> 
            </TripCardContainer>
        )
    })

    return ( 
        <MainContainer>
            Aqui é a home do Admin
            <ButtonsContainer>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
            </ButtonsContainer>
            {renderTrips}
        </MainContainer>
    )
}
