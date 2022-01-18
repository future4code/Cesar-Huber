// ------------- Exercícios ------------- //
// 3)   -> recebe string tarefa.
//      -> adicionar à var lista_tarefas.
//      -> exibir a lista_tarefas.

const newTask = process.argv[2]
const taskList = []
const updatedTaskList = [...taskList, newTask]

console.table(updatedTaskList)