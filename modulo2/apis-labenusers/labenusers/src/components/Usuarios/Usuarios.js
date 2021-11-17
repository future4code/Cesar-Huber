import React from 'react'
import { ContainerUsuario } from './styles'

export default function Usuarios(props) {
    return (
        <ContainerUsuario>
            <div onClick={() => props.definePage(props.userID)}>{props.userName}</div>
            <button onClick={() => props.deleteUser(props.userID)}>X</button>
        </ContainerUsuario>
    )
}
