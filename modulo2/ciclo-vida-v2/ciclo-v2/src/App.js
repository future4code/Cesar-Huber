import React from "react"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Tarefa from './components/Tarefa'

// ------------- STYLED COMPONENTS ------------------------ //

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: whitesmoke;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerInteracao = styled.div`
  margin: 10px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  input{
    flex-grow: 1;
    margin: 0 15px;
  }
  button{
    margin: 0 15px;
    padding: 5px;
    border: none;
    background-color: #36494E;
    color: whitesmoke;
  }
`

export default class App extends React.Component {
  // --------------- STATE ---------------------------------- //
  state = {
    tarefas: [],
    inputTexto: '',
    filtro: ''
  }

  // --------------- FUNCTIONS ------------------------------ //
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      this.salvarTarefasLocalStorage()
    }
  }

  componentDidMount() {
    this.buscarLocalStorage()
  }

  salvarTarefasLocalStorage = () => {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  }

  buscarLocalStorage = () => {
    const tarefasStorage = localStorage.getItem('tarefas')
    const tarefasParse = JSON.parse(tarefasStorage)

    this.setState({
      tarefas: tarefasParse || []
    })
  }

  onChangeInput = (event) => {
    this.setState({ inputTexto: event.target.value })
  }

  onClickAddTarefa = () => {
    const novaListaTarefas = [...this.state.tarefas, {
      id: Date.now(),
      texto: this.state.inputTexto,
      completa: false
    }]

    this.setState({ tarefas: novaListaTarefas })
    this.setState({ inputTexto: ''})
  }

  apagarTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter((tarefa) => {
      if (tarefa.id !== id) {
        return tarefa
      }
    })
    
    this.setState({ tarefas: novaListaTarefas })
  }

  concluirTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFiltro = (event) => {
    this.setState({ filtro: event.target.value })
  }

  // --------------- RENDER ------------------------------ //
  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const msgListaVazia = () => {
      switch (this.state.filtro) {
        case 'pendentes':
          return <p>Nenhuma pendência</p>
        case 'completas':
          return <p>Nenhuma tarefa completa</p>
        default:
          return <p>Adicione uma tarefa</p>
      } 
    } 

  // --------------- RETURN ------------------------------ //
    return (
      <Div>
        <GlobalStyle />
        <h1>Lista de Tarefas</h1>
        <ContainerInteracao>
          <input value={this.state.inputTexto} onChange={this.onChangeInput} />
          <button onClick={this.onClickAddTarefa}>Adicionar Tarefa</button>
        </ContainerInteracao>
        <ContainerInteracao>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFiltro}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </ContainerInteracao>  
        <br/>
        {listaFiltrada.length > 0 ? listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              apagarTarefa={this.apagarTarefa}
              concluirTarefa={this.concluirTarefa}
            />
          )
        }) : msgListaVazia() }
      </Div>
    )
  }
}
