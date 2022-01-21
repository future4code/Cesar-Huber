// ------------- Exercícios ------------- //
// 1)
//  a) para acessar os parametros passados na linha de comando do node, é necessário utilizar o array process.argv

//  b)  -> receber nome e idade
//      -> imprimir no console: "Olá, (Nome)! Você tem (sua idade) anos."

// comando no terminal: npm run start Cesar 34

const nome = process.argv[2]
const idade = process.argv[3]

let outputMsg = `Olá, ${nome}! Você tem ${idade} anos.`

if (process.argv[2] === undefined || process.argv[3] === undefined) {
    outputMsg = `Olá! Estava esperando receber o nome e a idade, nesta ordem.`
}

console.log(outputMsg)

//  c)  -> = acima, mostrar idade daqui 7 anos: "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

/*let */ outputMsg = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7} anos.`

if (process.argv[2] === undefined || process.argv[3] === undefined) {
    outputMsg = `Olá! Estava esperando receber o nome e a idade, nesta ordem.`
}

console.log(outputMsg)