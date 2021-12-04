import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    cursor: pointer;
    background-color: #90BF73;
    color: #FFF;
    border-radius: 3px;
    border: none;
    padding: 5px 20px;
    margin: 0;
    box-shadow: 1px 1px 5px #353535;
    :hover{
        background-color: #77B154;
    }
`

export default function YesButton(props) {
    return (
            <StyledButton onClick={() => {props.choosePerson()}}>OPA</StyledButton>
    )
}
