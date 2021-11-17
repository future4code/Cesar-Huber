import React from 'react'
import axios from 'axios'
import { ContainerDetalheUsuario, ContainerEditInfo, GoBackButton, DeleteButton, EditButton } from './styles'


export default class DetalheUsuario extends React.Component {

    state = {
        userDetail: {},
        editStat: 1,
        newNameInput: '',
        newEmailInput: ''
    }

    componentDidMount() {
        this.getUserDetail();
    }

    getUserDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`, {
            headers: {
                Authorization: 'cesar-huber-carver'
            }
        }).then((res) => {
            this.setState({ userDetail: res.data })
        }).catch((err) => {
            alert('Detalhe não encontrado')
        })
    }

    handleEditStat = () => {
        const newStat = this.state.editStat === 1 ? 2 : 1
        this.setState({ editStat: newStat })
    }

    handleNewNameChange = (e) => {
        this.setState({ newNameInput: e.target.value })
    }

    handleNewEmailChange = (e) => {
        this.setState({ newEmailInput: e.target.value })
    }

    updateUserInfo = () => {
        const body = {
            name: this.state.newNameInput,
            email: this.state.newEmailInput
        };
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.userDetail.id}`,
        body,
        {
            headers: {
                Authorization: 'cesar-huber-carver'
            }
        }).then((res) => {
            alert('Informações atualizadas com sucesso!')
            this.setState({ editStat: 1 })
            this.setState({ newNameInput: '' })
            this.setState({ newEmailInput: '' })
            this.getUserDetail()
        }).catch((err) => {
            alert('Tivemos algum problema com a atualização das informações. Verifique se preencheu tudo corretamente e tente novamente por favor.')
        })
    }

    render() {

        return (
            <ContainerDetalheUsuario>
                <GoBackButton onClick={() => this.props.definePage()}>Voltar</GoBackButton>
                <ul>
                    <li>Nome: {this.state.userDetail.name}</li>
                    <li>Email: {this.state.userDetail.email}</li>
                </ul>
                <DeleteButton onClick={() => this.props.deleteUser(this.state.userDetail.id)}>Excluir Usuário</DeleteButton>
                {this.state.editStat === 1 ?
                    <EditButton onClick={this.handleEditStat}>Editar Informações</EditButton>
                    :
                    <ContainerEditInfo>
                        <input
                            placeholder={'Digite um novo nome'}
                            value={this.state.newNameInput}
                            onChange={this.handleNewNameChange}
                        />
                        <input
                            placeholder={'Digite um novo email'}
                            value={this.state.newEmailInput}
                            onChange={this.handleNewEmailChange}
                        />
                        <button onClick={this.updateUserInfo}>Salvar Informações</button>
                    </ContainerEditInfo>
                }
            </ContainerDetalheUsuario>
        )
    }
}
