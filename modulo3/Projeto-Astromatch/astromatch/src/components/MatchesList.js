import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MatchContainerBasicInfo = styled.div`
    min-width: 250px;
    width: 90%;
    height: 70px;
    border: 2px solid #77B154;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #353535;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const StyledCloseButton = styled.button`
    align-self: flex-end;
`

const stackStyle = {
    padding: '10px 0',
    width: '345px',
    height: '560px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(#FFF, #FBEFEF)'
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
}

export default function MatchesList(props) {

    const [currentId, setCurrentId] = useState('')

    const [open, setOpen] = React.useState(false);

    const handleOpen = (id) => {
        setOpen(true)
        setCurrentId(id)
    }
    const handleClose = () => {
        setOpen(false)
        // console.log('cliquei fechar')
    };

    useEffect(() => {
    }, [open])

    const renderedList = () => {
        return (
            props.matchesList.map((match) => {
                return (
                    <MatchContainer onClick={() => { handleOpen(match.id) }} key={match.id}>
                        <MatchContainerBasicInfo>
                            <Avatar alt={match.name} src={match.photo} sx={{ margin: '0 10px', padding: '4px', width: 64, height: 64 }} />
                            <p>{match.name}</p>
                        </MatchContainerBasicInfo>

                        {open && match.id === currentId ?

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={modalStyle}>
                                    {/* <StyledCloseButton onClick={() => {handleClose()}}>X</StyledCloseButton> */}
                                    <Avatar alt={match.name} src={match.photo} sx={{ padding: '4px', width: 100, height: 100 }} />
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ ml: 2 }}>
                                        {match.name}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                                        {match.age + ' anos'}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                                        <strong>{'Minha bio: '}</strong>
                                        {match.bio}
                                    </Typography>
                                </Box>
                            </Modal>

                            : ''
                        }
                    </MatchContainer>
                )
            })
        )
    }


    return (
        <div>
            <Stack direction="column" spacing={2} sx={stackStyle}>
                {renderedList()}
            </Stack>
        </div>
    );
}