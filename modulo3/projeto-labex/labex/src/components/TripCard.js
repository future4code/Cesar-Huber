import styled from 'styled-components'
import { COLORS } from '../constants/styles'

const TripCardContainer = styled.div`
    cursor: pointer;
    width: 40vw;
    min-width: 272px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(246, 247, 235, .6);
    &:hover{
        background: ${COLORS.xwhiteish};
    }
`

const DateDurationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`

export default function TripCard(props) {
    return (
        <TripCardContainer onClick={props.goToApplication}>
            <p><b>Viagem: </b>{props.name}</p>
            <p><b>Planeta: </b>{props.planet}</p>
            <p><b>Descrição: </b>{props.description}</p>
            <DateDurationContainer>
                <p><b>Data de Partida: </b>{props.date}</p>
                <p><b>Duração (dias): </b>{props.duration}</p>
            </DateDurationContainer>
        </TripCardContainer>
    )
}
