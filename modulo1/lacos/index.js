// ----------------------------------------- //
// --- INTERPRETAÇÃO DE CÓDIGO ------------- //
// ----------------------------------------- //

// 1. um laço que soma i ao valor inicial (0) enquanto i for menor que 5. Ou seja, irá somar 1, 2, 3 e 4 à variável valor que será atualizada a cada soma. O valor total somado que será impresso é 10 (1 + 2 + 3 + 4).

// 2. a) serão impressos os valores maiores que 18 da lista de números.
//    b) na realidade o for of passa por cada item do array. O que limitou a impressão dos números apenas maior que 18, foi a condicional if incluída no bloco for.

// 3. o resultado impresso é de 1 asterisco por linha vezes o número da linha, visto que o start do for sempre volta a ser 0 a cada linha.

// ----------------------------------------- //
// --- ESCRITA DE CÓDIGO ------------------- //
// ----------------------------------------- //

// 1. perguntar qtd de pets. qtdPets = input usuário. 
//    a) se 0, "Que pena! Você pode adortar um pet!"
//    b) pedir o nome de cada pet. nomesPets = inputs (n)
//    c) console.log(nomesPets)

const quantidadePets = Number(prompt("Quantos pets você tem?"))
let nomesPets = []

function criarArrayNomesPets() {
    if (quantidadePets === 0) {
        console.log("Que pena! Você pode adotar um pet.") 
        return
    }

    for (i = 0; i < quantidadePets; i++) {
        let nomePet = prompt(`Qual o nome do seu pet nº ${i + 1}?`)
        nomesPets.push(nomePet)
    }

    if (quantidadePets > 1) {
        console.log(`Os nomes dos seus pets são:`)
        for (i = 0; i < nomesPets.length; i++) {
            console.log(nomesPets[i])
        }
    }
    else {
        console.log(`O nome do seu pet é:`)
        for (i = 0; i < nomesPets.length; i++) {
            console.log(nomesPets[i])
        }
    }
}

criarArrayNomesPets()

// 2. array original com números.
// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
for (let num of arrayOriginal) {
    console.log(num)
}

// b)
for (let num of arrayOriginal) {
    console.log(num/10)
}

// c) 
let arrayPares = []
for (let num of arrayOriginal) {
    if (num % 2 === 0) {arrayPares.push(num)}
}
console.log(arrayPares)

// d) 
let arrayStrings = []
for (i = 0; i < arrayOriginal.length; i++) {
    texto = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    arrayStrings.push(texto)
}

for (let texto of arrayStrings) {
    console.log(texto)
}

// e) 
let n = 1
maior = arrayOriginal[0]
menor = arrayOriginal[0]
while (n < arrayOriginal.length) {
    if (arrayOriginal[n] > maior) {maior = arrayOriginal[n]}
    if (arrayOriginal[n] < menor) {menor = arrayOriginal[n]}
    n++
}

console.log(`O maior número do array é ${maior} e o menor númeo é ${menor}`)

// ----------------------------------------- //
// --- DESAFIOS ---------------------------- //
// ----------------------------------------- //

// 1. Jogo adivinhação de números entre 2 jogadores
const numero = Number(prompt(`Para iniciar o jogo, informe um número`))
console.log(`Vamos jogar!`)

let numeroChutado = Number(prompt(`Chute um número`))
let i = 1
while (numeroChutado !== numero) {
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroChutado > numero) {
        console.log(`Errrrrrou... é menor que isso`)
        numeroChutado = Number(prompt(`Chute outro número. Menor dessa vez.`))
    }
    else {
        console.log(`Errrrrrou... é maior que isso`)
        numeroChutado = Number(prompt(`Chute outro número. Maior dessa vez.`))
    }
    i++
}

console.log(`Acertou!!! Era mesmo o número ${numero}`)
console.log(`O número de tentativas foi: ${i}`)

// 2. mesmo jogo, mas 1P, vs PC
const numero = Math.floor((Math.random() * 100) + 1)
console.log(`Vamos jogar! O computador já escolheu um número aleatório entre 1 e 100 e você deve adivinhá-lo.`)
alert(`Vamos jogar! O computador já escolheu um número aleatório entre 1 e 100 e você deve adivinhá-lo.`)

let numeroChutado = Number(prompt(`Chute um número`))
let i = 1
while (numeroChutado !== numero) {
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroChutado > numero) {
        console.log(`Errrrrrou... é menor que isso`)
        numeroChutado = Number(prompt(`Chute outro número. Menor dessa vez.`))
    }
    else {
        console.log(`Errrrrrou... é maior que isso`)
        numeroChutado = Number(prompt(`Chute outro número. Maior dessa vez.`))
    }
    i++
}

alert(`Acertou!!! Era mesmo o número ${numero}.
O número de tentativas foi: ${i}`)
console.log(`Acertou!!! Era mesmo o número ${numero}`)
console.log(`O número de tentativas foi: ${i}`)