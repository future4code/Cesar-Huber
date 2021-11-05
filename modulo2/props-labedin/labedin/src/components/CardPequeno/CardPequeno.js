import React from 'react'
import { SmallCardContainer, EmphasizedP } from "../styled/styled"

export const CardPequeno = (props) => {
    return (
        <SmallCardContainer>
            <img src= { props.logo } alt="ícone" />
            <EmphasizedP> { props.titulo } </EmphasizedP>
            <p> { props.conteudo } </p>
        </SmallCardContainer>
    )
};