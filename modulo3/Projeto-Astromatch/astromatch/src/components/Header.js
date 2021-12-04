import React, { useEffect } from 'react'
// import styled from 'styled-components'
import logo from '../img/logo.png'
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled('div')({
    width: '345px',
    height: '50px',
    backgroundColor: '#F3CECE',
    display: 'flex',
    alignItems: 'center',
    img: {
        margin: '0 10px',
        height: '40px',
        width: '40px'
    },
    h1: {
        margin: '0 10px',
        fontSize: '20px',
        color: '#4B7033'
    },
    h2: {
        margin: '0 10px',
        marginBottom: '-7px',
        fontSize: '12px',
        color: '#353535',
        fontStyle: 'italic'
    }
})

const IconsContainer = styled('div')({
    flexGrow: '2',
    display: 'flex',
    justifyContent: 'space-evenly'
})

const TitleContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 4,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const ClearStyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 12,
        top: 28,
        border: 'none',
        padding: '0 2px',
        fontSize: '10px'
    },
}));



export default function Header(props) {

    useEffect(() => {
        props.getMatches()
    }, [])

    return (
        <HeaderContainer>
            <img src={logo} alt={'logo'} />
            <TitleContainer>
                <h2>Saia da seca com o</h2>
                <h1>AstroMatch</h1>
            </TitleContainer>
            <IconsContainer>
                <IconButton onClick={() => { props.clearMatches() }} >
                    <ClearStyledBadge badgeContent={'Limpar'}>
                        <AutorenewIcon sx={{ color: '#353535' }} />
                    </ClearStyledBadge>
                </IconButton>
                <IconButton onClick={() => { props.goToAllMatches() }}>
                    <StyledBadge badgeContent={props.matchesList.length} color="primary">
                        {
                            props.currentPage === 'Matches' ?
                                <ContactsIcon sx={{ color: '#77B154' }} />
                                :
                                <ContactsIcon sx={{ color: '#353535' }} />
                        }
                    </StyledBadge>
                </IconButton>
                <IconButton onClick={() => { props.goToHome() }}>
                    {
                        props.currentPage === 'Home' ?
                            <ContactPageIcon sx={{ color: '#77B154' }} />
                            :
                            <ContactPageIcon sx={{ color: '#353535' }} />
                    }
                    
                </IconButton>
            </IconsContainer>
        </HeaderContainer>
    )
}
