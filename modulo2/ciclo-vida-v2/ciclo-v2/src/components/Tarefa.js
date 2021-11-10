import React from 'react'
import styled from 'styled-components'

const ContainerTarefa = styled.div`
    width: 400px;
    height: 25px;
    display: flex;
    border-top: 1px solid #36494E;
    border-bottom: 1px solid #36494E;
    p{
        flex-grow: 1;
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0 5px;
        cursor: pointer;
        color: ${({ completa }) => (completa ? 'grey' : 'black')};
        text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')}
    }
    p:hover{
        background-color: #63A375;
        color: whitesmoke;
    }
    button{
        border: none;
        background-color: #A37774;
        color: whitesmoke;
        cursor: pointer;
    }
    button:hover{
        background-color: #720E07;
    }
`

export default function Tarefa(props) {
    return (
        <ContainerTarefa completa={props.tarefa.completa}>
            <p onClick={() => props.concluirTarefa(props.tarefa.id)}>{props.tarefa.texto}</p>
            <button onClick={() => props.apagarTarefa(props.tarefa.id)}>Apagar tarefa</button>
        </ContainerTarefa>
    )
}
