import React from 'react'
import { Button } from '@mui/material'

export default function NoButton(props) {
    return (
            <Button onClick={() => {props.updateProfile()}} variant='contained' color='secondary' sx={{color:'#FFF', width:'100%', margin: 0, padding:'5px 5px'}}>Nope</Button>
    )
}