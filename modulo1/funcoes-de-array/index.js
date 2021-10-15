// --------------------------------------- //
// --- INTERPRETAÇÃO DE CÓDIGO ----------- //
// --------------------------------------- //

// 1. a) será impresso o objeto {}, o índice [i] e o array [] de cada objeto no array. 

// 2. Será impresso o novoArray, que consiste apenas nos nomes do array original. Ex: De { nome: "Amanda Rangel", apelido: "Mandi" } será levado para o novo array apenas "Amanda Rangel".

// 3. será impresso no console o novoArrayC, que consiste em 2 objetos, cujos apelidos sejam diferentes de Chijo, ou seja, os dois primeiros elementos do array original.

// --------------------------------------- //
// --- ESCRITA DE CÓDIGO ----------------- //
// --------------------------------------- //

// 1. 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //    a) novo array apenas nomes

 const nomesPets = pets.map((pet) => {
     return pet.nome
 })
// console.log(nomesPets)

//    b) novo array salsichas

const petsSalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
// console.log(petsSalsicha)

//    c) novo array mensagens poodle: Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const msgPetsPoodle = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
// console.log(msgPetsPoodle)

// 2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//    a) novoArray apenas com nome

const nomesProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log(nomesProdutos)

//    b) novoArray com nome e preço * 95%

const produtosDesconto = produtos.map((produto) => {
    return produto.nome + " | " + produto.preco * 0.95
})
console.log(produtosDesconto)

//    c) novoArray objetos categoria Bebidas

const produtosBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(produtosBebidas)

//    d) novoArray objetos nomes contenha "Ypê"

const produtosNomesYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(produtosNomesYpe)

//    e) novoArray string Compre NOME por PRECO apenas de nomes Ype

const msgProdutosNomesYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
}).map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(msgProdutosNomesYpe)

// --------------------------------------- //
// --- DESAFIOS -------------------------- //
// --------------------------------------- //

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // 1. a) novoArray nomes pokemons ordem alfabética .sort()
const nomesPokemonsOrdemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome
}).sort()

console.log(nomesPokemonsOrdemAlfabetica)

 // 1. b) novoArray tipos pokemons sem repetição
 // fazendo com métodos encontrados em foruns (reduce + some)
const tiposUnicosPokemons = pokemons.reduce((unique, i) => {
    if (!unique.some(obj => obj.tipo === i.tipo)) {unique.push(i)}
    return unique
},[]).map((pokemon) => {
    return pokemon.tipo
})

console.log(tiposUnicosPokemons)

 // fazendo com laço
 const tiposUnicosPokemons2 = []
 for (let pokemon of pokemons) {
     if (!tiposUnicosPokemons2.includes(pokemon.tipo)) {
         tiposUnicosPokemons2.push(pokemon.tipo)
     }
 }

 console.log(tiposUnicosPokemons2)

 // fazendo com método for each
 const tiposUnicosPokemons3 = []
 pokemons.forEach((pokemon) => {
     if (!tiposUnicosPokemons3.includes(pokemon.tipo)) {
         tiposUnicosPokemons3.push(pokemon.tipo)
     }
 })

 console.log(tiposUnicosPokemons3)