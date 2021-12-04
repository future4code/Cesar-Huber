import React from 'react'
import styled from 'styled-components'
import MatchesList from '../components/MatchesList'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

const ListContainer = styled.div` 
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
            <Card sx={{ height: '600px', maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardHeader
                    title={msg()}
                />
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
