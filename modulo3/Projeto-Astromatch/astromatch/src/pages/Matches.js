import React from 'react'
import styled from 'styled-components'
import MatchesList from '../components/MatchesList'

const ListContainer = styled.div` 
    display: flex;
    flex-direction: column;
`

export default function Matches(props) {

    return (
        <ListContainer>
            <MatchesList 
                matchesList={props.matchesList} 
                getMatches={props.getMatches} 
            />
        </ListContainer>
    )
}
