// -------------------------------------- //
// -- INTERPRETAÇÃO DE CÓDIGO ----------- //
// -------------------------------------- //

// 1. a) será impresso, um item por linha:
// "Matheus Nachtergaele"
// "Virgina Cavendish"
// "canal: Globo horário: 14h"

// 2. a) será impesso em sequência:
// "nome: Juca idade: 3 raca: SRD"
// "idade: 3 raca: SRD nome: Juba"
// "idade: 3 raca: SRD nome: Jubo"
//    b) os 3 pontos (...) são para iniciar um spread, um destrinchamento, que funciona para copiar um objeto já existente.

// 3. a) será impresso em cada linha do console:
// false
// altura not defined
//    b) false foi impresso porque a função minhaFuncao retorna o objeto e propriedade, que no caso do primeiro console log tinham por parâmetro pessoa (objeto) e "backender" (propriedade existente). Já no caso do segundo console.log, a propriedade "altura" não existe, portanto resultaria em erro.

// -------------------------------------- //
// -- ESCRITA DE CÓDIGO ----------------- //
// -------------------------------------- //

// 1. a) criar objeto com duas propriedades: nome (string) e apelidos (array com 3 apelidos). Escrever função que recebe entrada de um objeto e imprime mensagem:
// "Eu sou Amanda, mas pode me chamar de Amandinha, Mandinha ou Mandi"

const pessoa = {
    nome: "Cesar",
    apelidos: ["Cesinha", "Ceh", "Chuber"]
}

const mensagem = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

mensagem(pessoa)


//    b) spread para novo objeto, manter nome mas com nova lista de apelidos. chamar a função anterior passando novo objeto como argumento.

const nova_pessoa = {
    ...pessoa,
    apelidos: ["Cesão", "C", "Cesildo"]
}

mensagem(nova_pessoa)


// 2. a) dois objetos diferentes com propriedades: nome, idade e profissão

const aluno1 = {
    nome: "Adalberto",
    idade: 27,
    profissao: "Professor"
}

const aluno2 = {
    nome: "Bertoval",
    idade: 38,
    profissao: "Estudante"
}


//    b) função que recebe os objetos e retorna array com as informações: nome, nome.length, idade, profissão, profissão.length

const arrayRetornado = (alunos) => {
    return [alunos.nome, 
        alunos.nome.length, 
        alunos.idade,
        alunos.profissao,
        alunos.profissao.length]
}

console.log(arrayRetornado(aluno1))
console.log(arrayRetornado(aluno2))

// 3. a) criar variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

//    b) criar 3 novos objetos que representem frutas de um sacolão. Propriedades: nome (string), disponibilidade (true)

const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 ={
    nome: "Abacaxi",
    disponibilidade: true
}

const fruta3 = {
    nome: "Maçã",
    disponibilidade: true
}

//    c) função que recebe objeto fruta por parâmetro e colocar dentro do carrinho. Invocar função com os 3 objetos criados.

function adicionarAoCarrinho(frutas) {
    carrinho.push(frutas)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)

//    d) imprimir carrinho. Deve ser array com 3 objetos.

console.log(carrinho)


// -------------------------------------- //
// -- DESAFIOS -------------------------- //
// -------------------------------------- //

// 1. criar função que pergunta nome, idade e profissão, depois imprime um objeto com essas propriedades. Depois, imprimir também o tipo para garantir que é objeto.

aImprimir = () => {
    nome = prompt("Qual seu nome?")
    idade = prompt("Qual a sua idade?")
    profissao = prompt("Qual a sua profissão?")

    console.log(informacoes = {
        nome: nome,
        idade: idade,
        profissao: profissao})

    console.log(typeof informacoes)
}

aImprimir()

// 2. função recebe dois objetos que representam filmes. Propriedades: ano de lançamento e nome. Retornar se o primeiro filme foi lançado antes (true/false) e no mesmo ano do segundo filme (true/false).

const filme1 = {ano_lancamento: 1999, nome: "Matrix"}
const filme2 = {ano_lancamento: 2003, nome: "Matrix Reloaded"}

validaLancamento = (filme1, filme2) => {
    primeiroLancadoAntes = filme1.ano_lancamento < filme2.ano_lancamento
    primeiroLancadoJunto = filme1.ano_lancamento === filme2.ano_lancamento

    console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroLancadoAntes}
    O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroLancadoJunto}`)
}

validaLancamento(filme1, filme2)

// 3. criar função para ex 3 de escrita. Receber por parâmetro uma das frutas e retornar esse mesmo objeto com propriedade disponibilidade invertida.

function checarDisponibilidade(frutas) {
    const frutasAtualizadas = {...frutas, disponibilidade: !frutas.disponibilidade}
    return frutasAtualizadas
}

console.log(checarDisponibilidade(fruta1))


// -------------------------------------- //
// -- DESAFIO EXTRA (por conta) --------- //
// -------------------------------------- //

// Fazer um sistema de controle de estoque simplificado para o caso de sucos.
// Dúvidas atuais: 
// 1: método (função) em objeto deveria trazer resultado com o return?
// 2: não consegui criar direto o array com cada um dos objetos, tive que criar primeiro os objetos depois incluir eles no array. 
// 3: Como faço para trazer só o nome de cada um dos objetos de um array?

// const suco1 = {
//     id: 1,
//     nome: "Morango",
//     estoque: 10,
//     disponibilidade: () => {
//         return this.estoque > 0
//     }
// }
// const suco2 = {
//     id: 2,
//     nome: "Abacaxi com Hortelã",
//     estoque: 18,
//     disponibilidade: () => {
//         return this.estoque > 0
//     }
// }
// const suco3 = {
//     id: 3,
//     nome: "Maçã",
//     estoque: 5,
//     disponibilidade: () => {
//         return this.estoque > 0
//     }
// }
// const sucos = [suco1, suco2, suco3]

// function adicionarAoCarrinhoEAtualizarEstoque(suco, quantidade) {
//     sucos.forEach(function(obj) {
//         if (obj.nome === suco) {
//             obj.estoque = quantidade
//         }
//     }
//     )
// }

// const suco = prompt(`Escolha qual suco deseja adicionar ao carrinho: 
// ${suco1.nome}, ${suco2.nome} ou ${suco3.nome}.`) 

// // aqui quero trazer os valores apenas da propriedade nome de cada um dos objetos

// // Exemplo: Escolha qual suco deseja adicionar ao carrinho: Morango, Abacaxi com Hortelã, Maçã

// let objeto_escolhido = sucos.find(obj => obj.nome === suco)
// let estoque_disponivel = objeto_escolhido.estoque

// const quantidade = Number(prompt(`Quantos sucos de suco_escolhido deseja adicionar ao carrinho? Estoque disponível: ${estoque_disponivel}.`))

// let novo_estoque = estoque_disponivel - quantidade
// console.log(novo_estoque)

// adicionarAoCarrinhoEAtualizarEstoque(objeto_escolhido, novo_estoque)

// console.log(sucos)