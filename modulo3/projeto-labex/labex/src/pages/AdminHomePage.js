import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../components/hooks/custom_hooks'
import { MainContainer, ButtonsContainer } from '../constants/styles'

// criar card para cada uma das viagens
const TripCardContainer = styled.div`
    margin: 10px;
    padding: 3px 10px;
    border: 1px solid black;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function AdminHomePage(props) {

    useProtectedPage()

    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    const goToCreateTrip = () => {
        history.push('/createtrip')
    }

    const goToTripDetail = (id) => {
        history.push(`/tripdetail/${id}`) 
        // CHECK: usar com o useParam depois na página do tripdetail para pegar a informação do id
    }

    return ( 
        <MainContainer>
            Aqui é a home do Admin
            <ButtonsContainer>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button>Logout</button>
            </ButtonsContainer>
            <TripCardContainer onClick={() => {goToTripDetail('id_viagem_1')}}>
                {'Viagem 1'}
                <button onClick={() => {console.log('viagem deletada')}}>x</button> 
                {/* CHECK: clicar no botão de deletar está ativando junto o onclick da div. Ajustar isso. */}
            </TripCardContainer>
            <TripCardContainer onClick={() => {goToTripDetail('id_viagem_2')}}>
                {'Viagem 2'}
                <button onClick={() => {console.log('viagem deletada')}}>x</button>
            </TripCardContainer>
            <TripCardContainer onClick={() => {goToTripDetail('id_viagem_3')}}>
                {'Viagem 3'}
                <button onClick={() => {console.log('viagem deletada')}}>x</button>
            </TripCardContainer>
        </MainContainer>
    )
}
