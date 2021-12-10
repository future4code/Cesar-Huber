import styled from 'styled-components'

const CandidatesContainer = styled.div`
    width: 40vw;
    min-width: 272px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(246, 247, 235, .6);
`

const SecondaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`

export default function Candidates(props) {
    return (
        <CandidatesContainer>
            <p><b>Viagem: </b>{props.name}</p>
            <p><b>Planeta: </b>{props.profession}</p>
            <SecondaryContainer>
                <p><b>Descrição: </b>{props.age}</p>
                <p><b>Data de Partida: </b>{props.country}</p>
            </SecondaryContainer>
            <p><b>Duração (dias): </b>{props.applicationText}</p>
        </CandidatesContainer>
    )
}
