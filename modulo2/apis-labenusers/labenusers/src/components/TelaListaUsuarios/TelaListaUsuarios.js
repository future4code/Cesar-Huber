import React, { Component } from 'react'
import { ContainerLista, ContainerUserSearch, ContainerInfoLista } from './styles'
import Usuarios from '../Usuarios/Usuarios'
import DetalheUsuario from '../DetalheUsuario/DetalheUsuario'
import axios from 'axios'


export default class TelaListaUsuarios extends Component {

    state = {
        users: [],
        page: 1,
        userIdDetail: '',
        userSearch: '',
        foundUsers: [],
        showFoundUsers: 0
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "cesar-huber-carver"
                }
            }
        )
            .then((res) => {
                this.setState({ users: res.data });
            })
            .catch((err) => {
                alert(err.response.data, err.response);
            });
    };

    deleteUser = (userId) => {
        if (window.confirm('Deseja realmente excluir este usuário?')) {
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                {
                    headers: {
                        Authorization: 'cesar-huber-carver'
                    }
                }
            ).then((res) => {
                alert('Usuário excluído com sucesso!')
                this.setState({
                    users: this.state.users.filter((user) => {
                        if (user.id !== userId) {
                            return user
                        }
                    })
                })
                this.setState({ page: 1 })
            }).catch((err) => {
                alert(err.response.data, err.response)
            })
        }
        else { return }
    }

    definePage = (userId) => {
        const newPage = this.state.page === 1 ? 2 : 1
        this.setState({ userIdDetail: userId })
        this.setState({ page: newPage })
    }

    handleUserSearchChange = (e) => {
        this.setState({ userSearch: e.target.value })
    }

    lookForUser = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.userSearch}`, {
            headers: {
                Authorization: 'cesar-huber-carver'
            }
        }).then((res) => {
            if (res.data.length > 0) {
                alert(`Usuário ${res.data.name} encontrado!`)
                this.setState({ searchedUsers: res.data })
                this.setState({ showFoundUsers: 1 })
            } else {
                alert(`Usuário ${this.state.userSearch} não encontrado`)
            }
        }).catch((err) => {
            alert(`Poxa, deu ruim aqui. Tente novamente mais tarde.`)
        })
    }

    clearSearch = () => {
        this.setState({ showFoundUsers: 0 })
    }

    render() {
        let listaUsuarios = []
        if (this.state.showFoundUsers === 0) {
            listaUsuarios = this.state.users.map((user) => (
                <Usuarios key={user.id} userID={user.id} userName={user.name} deleteUser={this.deleteUser} definePage={this.definePage} />))
        } else {
            listaUsuarios = this.state.foundUsers.map((user) => (
                <Usuarios key={user.id} userID={user.id} userName={user.name} deleteUser={this.deleteUser} definePage={this.definePage} />))
        }

        return (
            this.state.page === 1 ?
                <ContainerLista>
                    <button onClick={this.props.definePage}>Ir para página de registro</button>
                    <ContainerUserSearch>
                        <input
                            placeholder={'Busque um Usuário'}
                            value={this.state.userSearch}
                            onChange={this.handleUserSearchChange}
                        />
                        <button onClick={this.lookForUser}>Buscar</button>
                        <button onClick={this.clearSearch}>Limpar Busca</button>
                    </ContainerUserSearch>
                    <ContainerInfoLista>
                        <h1>Usuários Cadastrados:</h1>
                        {listaUsuarios.length > 0 ? listaUsuarios : 'Nenhum usuário registrado ainda'}
                    </ContainerInfoLista>
                </ContainerLista>
                :
                <DetalheUsuario
                    userId={this.state.userIdDetail}
                    definePage={this.definePage}
                    deleteUser={this.deleteUser}
                />
        )
    }
}
