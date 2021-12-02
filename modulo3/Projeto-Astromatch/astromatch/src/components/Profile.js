import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import YesButton from './YesButton';
import NoButton from './NoButton';
import styled from 'styled-components'
import { BASE_URL, aluno } from '../urls/urls'


const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    Button{
        margin: 10px;
    }
`

const ProfilePictureContainer = styled.div`
    height: 400px;
    max-width: 345px;
    display: flex;
    align-items: center;
    /* background-image: url({profile.photo}); */
    img{
        width: 100%;
        max-height: 100%;
        object-fit: scale-down;
        object-position: center top;
        backdrop-filter: blur(8px);
    }
`

const BioContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    text-align: center;
`

export default function Profile(props) {
    const [profile, setProfile] = useState({})

    const updateProfile = () => {
        axios.get(`${BASE_URL}${aluno}/person`)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.data.response)
            })
    }

    useEffect(() => {
        updateProfile()
    }, [])

    useEffect(() => {
        props.getMatches()
    }, [props.matchesList])

    const choosePerson = () => {
        const url = `${BASE_URL}${aluno}/choose-person`
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(url, body)
            .then((res) => {
                updateProfile()
            })
            .catch((err) => {
                console.log(err.data.response)
            })
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={profile.name}
                    subheader={profile.age + ' anos'}
                />
                <ProfilePictureContainer>
                    <img src={profile.photo} alt={profile.name} />
                </ProfilePictureContainer>
                <BioContainer>
                    <Typography variant="body2" color="text.secondary" bgcolor='#D2D7DF'>
                        {profile.bio}
                    </Typography>
                </BioContainer>

            </Card>
            <ButtonsContainer>
                <YesButton 
                    choosePerson={choosePerson} 
                /> 
                <NoButton 
                    updateProfile={updateProfile} 
                />
            </ButtonsContainer>
        </div>
    );
}
