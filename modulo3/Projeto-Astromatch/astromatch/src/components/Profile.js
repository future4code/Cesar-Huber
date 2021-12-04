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
    position: relative;
    height: 400px;
    max-width: 345px;
    display: flex;
    align-items: center;
    /* background-image: url({profile.photo});
	background-position: center;
    background-repeat: no-repeat;
    background-size: 150%;
	backdrop-filter: blur(8px);
    z-index: -1; */
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

export default function Profile(props) {
    const [profile, setProfile] = useState({})
    // const [showProfile, setShowProfile] = useState(false)

    const updateProfile = () => {
        axios.get(`${BASE_URL}${aluno}/person`)
            .then((res) => {
                setProfile(res.data.profile)
                // setShowProfile(true)
            })
            .catch((err) => {
                console.log(err.data.response)
            })
    }

    useEffect(() => {
        updateProfile()
    }, [])

    // useEffect(() => {
    //     toRender()
    // }, [showProfile])

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
                console.log(err.data.response)
            })
    }

    // const toRender = () => {
    //     showProfile ?
    //         <div>
    //             <Card sx={{ maxWidth: 345 }}>
    //                 <CardHeader
    //                     title={profile.name}
    //                     subheader={profile.age + ' anos'}
    //                 />
    //                 <ProfilePictureContainer>
    //                     <img src={profile.photo} alt={profile.name} />
    //                 </ProfilePictureContainer>
    //                 <BioContainer>
    //                     <Typography variant="body2" color="text.secondary" bgcolor='#D2D7DF'>
    //                         {profile.bio}
    //                     </Typography>
    //                 </BioContainer>

    //             </Card>
    //             <ButtonsContainer>
    //                 <YesButton
    //                     choosePerson={choosePerson}
    //                 />
    //                 <NoButton
    //                     updateProfile={updateProfile}
    //                 />
    //             </ButtonsContainer>
    //         </div>
    //         :
    //         <div>
    //             {'Carregando...'}
    //         </div>
    // }

    return (
        <div>
            <Card sx={{ height: 600, maxWidth: 345 }}>
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
        </div>
    );
}
