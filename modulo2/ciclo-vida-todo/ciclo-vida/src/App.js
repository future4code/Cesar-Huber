import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Barlow', sans-serif;
  }
  `

const ContainerAddTarefa = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  input{
    flex-grow: 1;
    margin: 0 10px;
  }
`

const ContainerTarefas = styled.div`
  margin: 20px; 
  width: 400px;
  display: flex;
  flex-direction: column;
  li{
    text-align: left;
    text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  }
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default class App extends React.Component {

  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  adicionarTarefa = () => {
    this.setState({
      tarefas: [...this.state.tarefas, {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }]
    })
  }

  novaTarefa = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.selected })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const tarefaAlterada = {
          ... tarefa,
          completa: !tarefa.completa
        }
        return tarefaAlterada
      }
      else {
        return tarefa
      }
    })
    
    this.setState({ tarefas: novaListaTarefas })
  }

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

    return (
      <Div>
        <h1>Lista de Tarefas</h1>
        <ContainerAddTarefa>
          <input value={this.state.inputValue} onChange={this.novaTarefa} />
          <button onClick={this.adicionarTarefa}>Adicionar Tarefa</button>
        </ContainerAddTarefa>
        <ContainerAddTarefa>
          <label>Filtrar</label>
          <select>
            <option disabled selected value>-- Selecione uma opção de filtro--</option>
            <option value=''>Nenhum</option>
            <option value='pendentes'>Pendentes</option>
            <option value='completas'>Completas</option>
          </select>
        </ContainerAddTarefa>
        <ContainerTarefas>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={this.selectTarefa(() => tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </ContainerTarefas>
      </Div>
    );
  }
}
