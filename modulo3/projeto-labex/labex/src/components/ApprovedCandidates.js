import styled from 'styled-components'
import { COLORS } from '../constants/styles'

const CandidatesContainer = styled.div`
    width: 40vw;
    min-width: 272px;
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(246, 247, 235, .6);
    border: 2px solid rgba(60, 143, 154, .8); // rgb de xtealish
    box-shadow: 2px 2px 7px ${COLORS.xtealishlight};
`

const SecondaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`

export default function ApprovedCandidates(props) {
    return (
        <CandidatesContainer>
            <p><b>Nome: </b>{props.name}</p>
            <p><b>Profissão: </b>{props.profession}</p>
            <SecondaryContainer>
                <p><b>Idade: </b>{props.age}</p>
                <p><b>País: </b>{props.country}</p>
            </SecondaryContainer>
            <p><b>Texto de Candidatura: </b>{props.applicationText}</p>
        </CandidatesContainer>
    )
}
