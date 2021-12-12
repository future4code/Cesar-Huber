import styled from 'styled-components'
import { ButtonsContainer, StyledApproveButton, StyledRejectButton } from '../constants/styles'
import { getTripDetail } from './api_requests'

const CandidatesContainer = styled.div`
    width: 40vw;
    min-width: 272px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(246, 247, 235, .6);
    border: 2px solid rgba(240, 162, 2, .6); // rgb de xyellowish
`

const SecondaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`

export default function Candidates(props) {
    return (
        <CandidatesContainer>
            <p><b>Nome: </b>{props.name}</p>
            <p><b>Profissão: </b>{props.profession}</p>
            <SecondaryContainer>
                <p><b>Idade: </b>{props.age}</p>
                <p><b>País: </b>{props.country}</p>
            </SecondaryContainer>
            <p><b>Texto de Candidatura: </b>{props.applicationText}</p>
            <ButtonsContainer>
                <StyledApproveButton onClick={() => {props.decideCandidate(props.tripId, props.candidateId, true, props.getTripDetail, props.setTripDetails)}}>Aprovar</StyledApproveButton>
                <StyledRejectButton onClick={() => {props.decideCandidate(props.tripId, props.candidateId, false, props.getTripDetail, props.setTripDetails)}}>Rejeitar</StyledRejectButton>
            </ButtonsContainer>
        </CandidatesContainer>
    )
}
