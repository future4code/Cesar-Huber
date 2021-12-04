import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import YesButton from './YesButton';
import NoButton from './NoButton';
import styled from 'styled-components'
import { BASE_URL, aluno } from '../urls/urls'
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    Button{
        margin: 10px;
    }
`

const ProfilePictureContainer = styled.div`
    position: relative;
    height: 400px;
    max-width: 345px;
    display: flex;
    align-items: center;
`

const BackgroundBlur = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    object-fit: cover;
    object-position: center;
    background-size: 150%;
`

const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: center;
    z-index: 1;
`

const BioContainer = styled.div`
    width: 345px;
    height: 60px;
    display: flex;
    align-items: stretch;
    /* margin: 10px 0; */
    text-align: center;
`

const LoadingContainer = styled.div`
    height: 600px;
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Profile(props) {
    const [profile, setProfile] = useState({})
    const [showProfile, setShowProfile] = useState(false)

    const updateProfile = () => {
        axios.get(`${BASE_URL}${aluno}/person`)
            .then((res) => {
                setProfile(res.data.profile)
                setShowProfile(true)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    useEffect(() => {
        updateProfile()
    }, [])

    const choosePerson = () => {
        const url = `${BASE_URL}${aluno}/choose-person`
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(url, body)
            .then((res) => {
                updateProfile()
                props.getMatches()
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    const renderShowProfile = 
        showProfile ?
            <Card sx={{ height: 600, width: 345 }}>
                    <CardHeader
                        title={profile.name}
                        subheader={profile.age + ' anos'}
                        sx={{ height: '80px' }}
                    />
                    <ProfilePictureContainer>
                        <BackgroundBlur src={profile.photo} />
                        <ProfilePicture src={profile.photo} alt={profile.name} />
                    </ProfilePictureContainer>
                    <BioContainer>
                        <Typography variant="body2" color="text.secondary" sx={{ width: '345px', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                            {profile.bio}
                        </Typography>
                    </BioContainer>
                    <ButtonsContainer>
                    <YesButton
                        choosePerson={choosePerson}
                    />
                    <NoButton
                        updateProfile={updateProfile}
                    />
                </ButtonsContainer>
            </Card>
        :
            <LoadingContainer>
                <HourglassTopTwoToneIcon fontSize='large' />
                Carregando...
            </LoadingContainer>
    

    return (
        <div>
            {renderShowProfile}
        </div>
    );
}
