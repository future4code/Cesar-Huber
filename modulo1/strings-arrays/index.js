// -------------------------------------------------------- //
// -- INTERPRETAÇÃO DE CÓDIGO ----------------------------- //
// -------------------------------------------------------- //

// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 10

// 2. frase original: Subi num ônibus em Marrocos
//    nova frase: SUBI NUM ÔNIBUS EM MIRROCOS
//    impressão no console: SUBI NUM ÔNIBUS EM MIRROCOS 27

// -------------------------------------------------------- //
// -- ESCRITA DE CÓDIGO ----------------------------------- //
// -------------------------------------------------------- //

// 1. perguntar nome e e-mail e imprimir: 
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// neste caso de exercício, irei usar o comando let ao invés de const, para caso em algum outro exercício eu necessite usar esta variável, não dê erro. 
let nome = prompt("Informe seu nome:")
let email = prompt("Informe seu melhor e-mail:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2. array com 5 comidas favoritas
let comidasFavoritas = ["hamburguer", "fritas", "lasanha", "kebap", "temaki"]

// a) imprimir array completo no console
console.log(comidasFavoritas)

// b) imprimir "Essas são as minhas comidas favoritas:" uma embaixo da outra
console.log("Essas são as minhas comidas favoritas:", comidasFavoritas)
//para exibir no console.log() em lista, basta clicar na setinha dentro do console log para abrir a lista de cada item, um por linha. 
// Seria possível também fazer uma função com join para listar os itens do array um abaixo do outro, porém não aprendemos isso em aula ainda e no enunciado diz para usar apenas o que aprendemos em aula.
// console.log(comidasFavoritas.join('\r\n'));

// c) perguntar uma comida favorita e substituir o segundo item da lista pelo input
let novaComidaFavorita = prompt("Qual a sua comida favorita?")
comidasFavoritas[1] = novaComidaFavorita
console.log(comidasFavoritas)

// 3. novo programa:
// a) criar array vazio na variável listaDeTarefas
let listaDeTarefas = []

// b) perguntar 3 tarefas e armazenar uma a uma no array
let tarefa1 = prompt("Informe 3 tarefas do dia, começando pela primeira:")
let tarefa2 = prompt("Agora informe a segunda tarefa para o dia:")
let tarefa3 = prompt("E por fim, informe a terceira tarefa para o dia:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// c) imprimir no console
console.log(listaDeTarefas)

// d) usuário informa indicação de tarefa realizada
let tarefaRealizada = prompt("Informe uma das 3 tarefas já realizadas (1, 2 ou 3): 1-" + tarefa1 + ", 2-" + tarefa2 + " ou 3-" + tarefa3)

// e) remover tarefa da lista de tarefas
listaDeTarefas.splice(Number(tarefaRealizada)-1,1)

// f) imprimir no console
console.log(listaDeTarefas)

// -------------------------------------------------------- //
// -- PARTIU DESAFIO DO DIA ------------------------------- //
// -------------------------------------------------------- //

// 1. receber uma frase e criar array com cada uma das palavras, ignorando os espaços
let frase = prompt("Escreva uma frase:")
let arrayFrase = frase.split(' ')
console.log(arrayFrase)

// 2. programa para encontrar um item no array e informar o índice e tamanho do mesmo
let array1 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let itemProcurado = prompt("Escolha uma fruta: " + array1)
console.log("A fruta escolhida é a de índice:", array1.indexOf(itemProcurado), "(0 a", Number(array1.length) -1, ") de um total de ", array1.length, "itens.")