// ------------- Exercícios ------------- //
// 2) -> recebe string com operação matemática e 2 números. Retorno deverá ser o resultado.

const op = process.argv[2]
const inputNum1 = process.argv[3]
const inputNum2 = process.argv[4]
const num1 = Number(inputNum1)
const num2 = Number(inputNum2)
let output = 0

switch(op) {
    case 'add':
        output = num1 + num2
        break
    case 'sub': 
        output = num1 - num2
        break
    case 'mult':
        output = num1 * num2
        break
    case 'div':
        output = num1 / num2
        break
    default:
        output = NaN
}

if (op === undefined || inputNum1 === undefined || inputNum2 === undefined) {
    console.log('Olá! Estava esperando receber uma operação matemática (add, sub, mult, div) e dois números separados, nesta ordem.')
} 
else {
    console.log('\x1b[36m%s\x1b[0m', 'Resposta: ', `${output}`)
}

