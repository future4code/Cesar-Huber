import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const MatchContainer = styled.div`
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

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const modalStyle = {
    opacity: '50%'
}

const stackStyle = { 
    mt: '10px', 
    width: '345px', 
    height: '400px', 
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function MatchesList(props) {
    console.log(props.matchesList)

    useEffect(() => {
        props.getMatches()
    }, [])

    const [currentId, setCurrentId] = useState('')

    const [open, setOpen] = useState(false)

    const handleOpen = (id) => {
        setOpen(true)
        setCurrentId(id)
        console.log('cliquei', id)
    }
    const handleClose = () => setOpen(false)

    const renderedList = () => {
        return (
            props.matchesList.map((match) => {
                return (
                    <MatchContainer onClick={() => handleOpen(match.id)} >
                        <Avatar alt={match.name} src={match.photo} sx={{ margin: '0 10px', width: 56, height: 56 }} />
                        <p>{match.name}</p>
                    </MatchContainer>
                )
            })
        )
    }

    const filteredModal = () => {
        return (
            props.matchesList.filter((item) => {
                if (item.id = currentId) {
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={modalStyle}
                    >
                        <Box sx={boxStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {item.id}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                }
            })
        )
    }



    return (
        <Stack direction="column" spacing={2} sx={stackStyle}>
            {renderedList()}
            {filteredModal()}
        </Stack>
    );
}