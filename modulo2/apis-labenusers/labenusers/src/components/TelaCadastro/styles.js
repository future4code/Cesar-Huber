import styled from 'styled-components'

export const ContainerTelaCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 1px solid black;
    h1{
        font-size: 20px;
    }
    input{
        margin: 10px;
    }
`

export const PageButton = styled.button`
    align-self: flex-start;
`

export const NewUserButton = styled.button`
        border: none;
        border-radius: 5px;
        background-color: darkblue;
        color: white;
        margin: 10px;
        padding: 5px 10px;
`