import React from 'react'
import styled from 'styled-components'
import MatchesList from '../components/MatchesList'
import Card from '@mui/material/Card';

const ListContainer = styled.div` 
    flex-grow: 2;
    max-height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleContainer = styled.div`
    display: flex;
    text-align: center;
    h4{
        font-family: 'Barlow', sans-serif;
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        padding: 5px 10px;

    }
`

export default function Matches(props) {
    const msg = () => {
        return (
            props.matchesList.length > 0 ? 
            props.matchesList.length > 1 ? 'Veja seus ' + props.matchesList.length + ' matches!' : 'Veja seu match!' 
            : 'Você ainda não tem nenhum match, continue tentando')
    }

    return (
        <div>
            <Card sx={{ height: '600px', maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <TitleContainer>
                    <h4>{msg()}</h4>
                </TitleContainer>
                <ListContainer>
                    <MatchesList
                        matchesList={props.matchesList}
                        getMatches={props.getMatches}
                    />
                </ListContainer>
            </Card>

        </div>
    )
}
