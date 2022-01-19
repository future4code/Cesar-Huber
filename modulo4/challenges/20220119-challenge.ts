// const firstNumber = prompt('Digite um número')
// const secondNumber = prompt('Digite outro número')
// const sum = firstNumber + secondNumber

// alert(`A soma dos números é: ${sum}`)

// 1) o código não funciona do jeito que está escrito, porque assume que o input de números pelo prompt, reornará um número, quando na realidade, o prompt recebe apenas strings, ou seja, números chegam no formato string. 

// 2) para corrigir este erro, basta declarar as variáveis que recebem os inputs como Number().

// 3) Typescript tem como padrão, a declaração de tipos, ou seja, ao declarar as variáveis firstNumber e secondNumber, seria necessário declarar também seus tipos, como const firstNumber: Number por exemplo.

// 4) 


const firstNumber: number = prompt('Digite um número')
const secondNumber: number = prompt('Digite outro número')
const sum: number = firstNumber + secondNumber

alert(`A soma dos números é: ${sum}`)