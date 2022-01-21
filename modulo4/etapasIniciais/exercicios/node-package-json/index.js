// ------------- Exercícios ------------- //
// 1)
//  a) para acessar os parametros passados na linha de comando do node, é necessário utilizar o array process.argv

//  b)  -> receber nome e idade
//      -> imprimir no console: "Olá, (Nome)! Você tem (sua idade) anos."

// comando no terminal: npm run start Cesar 34

// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//  c)  -> = acima, mostrar idade daqui 7 anos: "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7} anos.`)

// 2) -> recebe string com operação matemática e 2 números. Retorno deverá ser o resultado.

// const op = process.argv[2]
// const inputNum1 = process.argv[3]
// const inputNum2 = process.argv[4]
// const num1 = Number(inputNum1)
// const num2 = Number(inputNum2)
// let output = 0

// switch(op) {
//     case 'add':
//         output = num1 + num2
//         break
//     case 'sub': 
//         output = num1 - num2
//         break
//     case 'mult':
//         output = num1 * num2
//         break
//     case 'div':
//         output = num1 / num2
//         break
//     default:
//         output = NaN
// }

// console.log(`Resposta: ${output}`)

// 3)   -> recebe string tarefa.
//      -> adicionar à var lista_tarefas.
//      -> exibir a lista_tarefas.

// const newTask = process.argv[2]
// const taskList = []
// const updatedTaskList = [...taskList, newTask]

// console.table(updatedTaskList)

// 4) uma pasta para cada exercício