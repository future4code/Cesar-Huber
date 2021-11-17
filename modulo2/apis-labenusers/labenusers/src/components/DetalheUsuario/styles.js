import styled from "styled-components";

export const ContainerDetalheUsuario = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    ul{
        margin: 5px;
    }
    li{
        list-style-type: none;
    }
`

export const ContainerEditInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin: 5px;
    }
`

export const GoBackButton = styled.button`
    align-self: flex-start;
`

export const DeleteButton = styled.button`
    align-self: center;
    margin: 5px;
`

export const EditButton = styled.button`
    align-self: center;
    margin: 5px;
`