import axios from 'axios'
import React, { Component } from 'react'
import { ContainerTelaCadastro, ContainerCadastro, PageButton, NewUserButton } from './styles'

export default class TelaCadastro extends Component {

    state = {
        inputEmail: '',
        inputName: ''
    }

    handleInputNameChange = (e) => {
        this.setState({ inputName: e.target.value })
    }

    handleInputEmailChange = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };
        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
                headers: {
                    Authorization: 'cesar-huber-carver'
                }
            }).then((res) => {
                this.setState({inputName: '', inputEmail: ''})
                alert('Usuário criado com sucesso!\n Já pode encontrar o seu nome na página de lista de usuários.')
            }).catch((err) => {
                alert('Infelizmente tivemos um problema com o cadastro. Tente novamente mais tarde.')
            })
    }

    render() {
        return (
            <ContainerTelaCadastro>
                <PageButton onClick={this.props.definePage}>Ir para página de lista</PageButton>
                <ContainerCadastro>
                    <h1>Tela de Cadastro</h1>
                    <input
                        placeholder={"nome"}
                        value={this.state.inputName}
                        onChange={this.handleInputNameChange}
                    />
                    <input
                        placeholder={"email"}
                        value={this.state.inputEmail}
                        onChange={this.handleInputEmailChange}
                    />
                    <NewUserButton onClick={this.createUser}>Criar Usuário</NewUserButton>
                </ContainerCadastro>
            </ContainerTelaCadastro>
        )
    }
}
