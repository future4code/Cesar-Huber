// ------------------------------------------------------- //
// -- INTERPRETAÇÃO DE CÓDIGO ---------------------------- //
// ------------------------------------------------------- //

// 1. a) Será impresso 10 e 50
//    b) deixaria de aparecer o resultado da função no console. A função por si só não executa nada, ela é apenas uma declaração. Para executar sua "função" é necessário que seja invocada.

// 2. a) é uma função para identificar se no texto digitado pelo usuário, encontra-se a palavra "cenoura". A resultante desta função é um booleano true ou false. Para evitar problemas de case sensitive, antes de realizar a busca, ela transforma todo o texto digitado em letras minúsculas.
//    b) retornará true em todos os casos.

// ------------------------------------------------------- //
// -- ESCRITA DE CÓDIGO ----------------------------------- //
// ------------------------------------------------------- //

// // 1. a) 
// const resultado1a = () => {
//     const nome = "Cesar"
//     const idade = "34"
//     const cidade = "São Paulo"
//     const profissao = "Estudante"
//     return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
// }
// console.log(resultado1a())

// //    b)
// const resultado1b = (nome, idade, cidade, profissao) => {
//     return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.` 
// }
// const nome1b = "Cesar"
// const idade1b = 34
// const cidade1b = "São Paulo"
// const profissao1b = "Estudante"
// const imprimirConsole1b = resultado1b(nome1b, idade1b, cidade1b, profissao1b)
// console.log(imprimirConsole1b)

// // 2. a) função para somar 2 números, ser invocada e imprimir no console
// const resultado2a = function(num1, num2) {
//     soma = num1 + num2
//     return soma
// }

// const imprimirConsole2a = resultado2a(5,8)
// console.log(imprimirConsole2a)

// //    b) função para identificar se o primeiro número é maior que o segundo
// function identificarN1MaiorN2(num1, num2) {
//     ehMaior = num1 > num2
//     return ehMaior
// }

// const imprimirConsole2b = identificarN1MaiorN2(21,18)
// console.log(imprimirConsole2b)

// //    c) função para indicar se o número recebido é par
// const resultado2c = (num1) => {
//     ehPar = num1 % 2 === 0
//     return ehPar
// }

// const imprimirConsole2c = resultado2c(4)
// console.log(imprimirConsole2c)

// //    d) função recebe string | imprime length e a msg em minúsculas
// const resultado2d = (texto1) => {
//     tamanho = texto1.length
//     textoMinusculas = texto1.toLowerCase()
//     return tamanho + " " + textoMinusculas
// }

// const texto = "Olá, Mundo!"
// const imprimirConsole2d = resultado2d(texto)
// console.log(imprimirConsole2d)

// // 3. uma função para cada operação básica, com dois números de parâmetro
// const resultado3Soma = (num1, num2) => {
//     soma = num1 + num2
//     return soma
// }

// const resultado3Subtracao = (num1, num2) => {
//     subtracao = num1 - num2
//     return subtracao
// }

// const resultado3Multiplicacao = (num1, num2) => {
//     multiplicacao = num1 * num2
//     return multiplicacao
// }

// const resultado3Divisao = (num1, num2) => {
//     divisao = num1 / num2
//     return divisao
// }

// const userNum1 = Number(prompt("Informe o primeiro número:"))
// const userNum2 = Number(prompt("Informe o segundo número:"))

// console.log(`Números inseridos: ${userNum1} e ${userNum2}`)
// console.log("Soma:", resultado3Soma(userNum1,userNum2))
// console.log("Subtração:", resultado3Subtracao(userNum1,userNum2))
// console.log("Multiplicação:", resultado3Multiplicacao(userNum1,userNum2))
// console.log("Divisão:", resultado3Divisao(userNum1,userNum2))

// ------------------------------------------------------- //
// -- DESAFIOS ------------------------------------------- //
// ------------------------------------------------------- //

// 1. a) arrow function que imprime o parametro recebido
const imprimirConsole = (param) => {
    console.log(param)
}

//    b) arrow function recebe 2 valores como parametros, sem retorno
const somarDoisValores = (num1, num2) => {
    param = Number(num1) + Number(num2)
    imprimirConsole(param)
}

const num1 = 4
const num2 = 5

somarDoisValores(num1, num2)

// 2. função que executa o teorema de pitágoras, recebendo dois catetos e retornando a hipotenusa

const calcularHipotenusa = (cateto1, cateto2) => {
    hipotenusa = Math.pow(cateto1,2) + Math.pow(cateto2,2)
    return hipotenusa
}

const cateto1 = 2
const cateto2 = 3
console.log(calcularHipotenusa(cateto1,cateto2))