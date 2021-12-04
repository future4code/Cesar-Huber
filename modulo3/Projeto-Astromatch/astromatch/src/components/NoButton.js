import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    cursor: pointer;
    background-color: #DF7C7C;
    color: #FFF;
    border-radius: 3px;
    border: none;
    padding: 5px 20px;
    margin: 0;
    box-shadow: 1px 1px 5px #353535;
    :hover{
        background-color: #D34A4A;
    }
`

export default function NoButton(props) {
    return (
            <StyledButton onClick={() => {props.updateProfile()}}>NOPE</StyledButton>
    )
}
