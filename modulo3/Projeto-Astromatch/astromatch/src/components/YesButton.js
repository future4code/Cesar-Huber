import React from 'react'
import { Button } from '@mui/material'

export default function YesButton(props) {
    return (
            <Button color='primary' onClick={() => {props.choosePerson()}} variant='contained' sx={{color:'#FFF', width:'100%', margin: 0, padding:'5px 5px'}}>Opa</Button>
    )
}
