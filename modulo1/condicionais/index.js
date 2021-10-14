// ------------------------------------------ //
// ---- INTERPRETAÇÃO DE CÓDIGO ------------- //
// ------------------------------------------ //

// 1. a) o código recebe o input do usuário, transforma em um número e testa se o número recebido é par ou não. O teste consiste em o número ser par. 
//    b) números pares
//    c) números ímpares

// 2. a) serve para exibir o preço de cada fruta e, no caso de não ser uma fruta listada, exibir o preço padrão de 5.
//    b) 2.25
//    c) seria impresso o valor errado, de 5 ao invés de 5.5. 

// 3. a) recebe um número informado pelo usuário, transformando o input em número.
//    b) no caso de 10, a mensagem será "Esse número passou no teste" e também "Essa mensagem é secreta!!!". Se fosse -10, não apareceria nenhuma mensagem, pois mensagem foi definida dentro do escopo if, que só se concretiza caso verdadeiro o teste lógico. 
//    c) sim. a mensagem deveria ter sido declarada fora do escopo de if, em um else.

// ------------------------------------------ //
// ---- ESCRITA DE CÓDIGO ------------------- //
// ------------------------------------------ //

// 1. programa para identificar se o usuário tem idade para dirigir (>= 18 anos)
//    a)
const idadeUsuario = Number(prompt(`Qual a sua idade?`))

//    b) feito acima

//    c) 
if (idadeUsuario >= 18) {
    console.log(`Você pode dirigir`)
}
else {
    console.log(`Você não pode dirigir.`)
}

// 2. programa que verifica o turno do dia que um aluno estuda. Matutino, Vespertino ou Noturno. bloco if/else
const turno = prompt(`Informe qual turno você estuda. M ou V ou N`)

if (turno === "M") {
    console.log(`Bom dia!`)
}
else if (turno === "V") {
    console.log(`Boa tarde!`)
}
else if (turno === "N") {
    console.log(`Boa noite!`)
}
else {
    console.log(`Turno não identificado. =/`)
}

// 3. igual anterior com bloco switch / case

let turno2 = prompt(`Informe qual turno você estuda. M ou V ou N`)

switch (turno2) {
    case "M":
        console.log(`Bom dia!`)
        break
    case "V":
        console.log(`Boa tarde!`)
        break
    case "N":
        console.log(`Boa noite!`)
        break
    default:
        console.log(`Turno não identificado. =/`)
}

// 4. caso do cinema se o filme for fantasia e o ingresso abaixo de 15 reais. perguntar ao usuário qual o genero e qual o preço do ingresso. Se true, "Bom filme!"; "Escolha outro filme :("

const generoFilme = prompt(`Qual o gênero do filme?`).toLowerCase()
const precoIngresso = Number(prompt(`Qual o preço do ingresso?`))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
}
else { 
    console.log("Escolha outro filme :(")
}

// ------------------------------------------ //
// ---- DESAFIOS ---------------------------- //
// ------------------------------------------ //

// 1. incluir no ex 4 prompt sobre lanchinho 

const lanchinhos = [
    {nome: "pipoca pequena", preco: 15},
    {nome: "pipoca média", preco: 20},
    {nome: "pipoca grande", preco: 25},
    {nome: "chocolate", preco: 15},
    {nome: "balas", preco: 10}
]

let mensagemLanchinho = `Escolha as opções de lanchinho:\n`
for ( var i = 0; i < lanchinhos.length; i++ ) {
    mensagemLanchinho = mensagemLanchinho + `${lanchinhos[i].nome} | R$ ${lanchinhos[i].preco}\n`
}

const lanchinho = prompt(mensagemLanchinho)

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
    console.log(`Aproveite seu/sua ${lanchinho}`)
}
else { 
    console.log("Escolha outro filme :(")
}

// 2. sistema de ingressos. informações necessárias: nome completo, tipo de jogo (IN / DO), etapa do jogo (SF / DT / FI), categoria (1 / 2 / 3 / 4), quantidade de ingressos. Sistema deve solicitar todas as informações através de prompt. Imprimir todas as informações junto ao valor de cada ingresso e o valor total que o usuário deve pagar. Jogos internacionais o preço é em dolar. R$ 4.10.

// Tabela de Preços
const tabelaPrecos = [
    {
        etapaJogo: "SF",
        categoria: 1,
        preco: 1320
    },
    {
        etapaJogo: "SF",
        categoria: 2,
        preco: 880
    },
    {
        etapaJogo: "SF",
        categoria: 3,
        preco: 550
    },
    {
        etapaJogo: "SF",
        categoria: 4,
        preco: 220
    },
    {
        etapaJogo: "DT",
        categoria: 1,
        preco: 660
    },
    {
        etapaJogo: "DT",
        categoria: 2,
        preco: 440
    },
    {
        etapaJogo: "DT",
        categoria: 3,
        preco: 330
    },
    {
        etapaJogo: "DT",
        categoria: 4,
        preco: 170
    },
    {
        etapaJogo: "FI",
        categoria: 1,
        preco: 1980
    },
    {
        etapaJogo: "FI",
        categoria: 2,
        preco: 1320
    },
    {
        etapaJogo: "FI",
        categoria: 3,
        preco: 880
    },
    {
        etapaJogo: "FI",
        categoria: 4,
        preco: 330
    }
]

const nomeCompleto = prompt(`Nome Completo:`)
const tipoJogo = prompt(`Escolha o tipo de jogo (IN / DO):`)
const etapaJogo = prompt(`Escolha a etapa do jogo (SF / DT / FI):`)
const categoria = Number(prompt(`Escolha a categoria dos assentos: (1 / 2 / 3 / 4):`))
const quantidadeIngressos = Number(prompt(`Quantos ingressos deseja comprar nesta configuração?`))

const valorFinal = (tipoJogo, etapaJogo, categoria, quantidadeIngressos) => {
    let ingressoEscolhido = tabelaPrecos.filter((ingresso) => {
    return ingresso.etapaJogo === etapaJogo && ingresso.categoria === categoria
    })

    let cambio = 1
    if (tipoJogo === "IN") {cambio = 4.167}

    // check //
    console.log(`Você escolheu a seguinte configuração:`)
    console.log(`Tipo de Jogo: ${tipoJogo}`)
    console.log(`Etapa de Jogo: ${etapaJogo}`)
    console.log(`Categoria do Assento: ${categoria}`)
    console.log(`Quantidade de Ingressos: ${quantidadeIngressos}`)
    // resultado final //
    console.log(`O valor total para esta configuração é de ${(ingressoEscolhido[0].preco * quantidadeIngressos * cambio).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    
}

valorFinal(tipoJogo, etapaJogo, categoria, quantidadeIngressos)