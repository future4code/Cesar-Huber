
// a) O tipo 'number' não pode ser atribuído ao tipo 'string'.
// const minhaString: string = 2

// b) fazendo um union type na criação da variável:
const meuNumero: number | string = 2

// c) 
enum Cores {
    AZUL = 'azul',
    AMARELO = 'amarelo',
    VERMELHO = 'vermelho'
}

type Pessoa = {
    nome: string, idade: number, corFavorita: Cores
}

const pessoa: Pessoa = {
    nome: 'Cesar',
    idade: 34,
    corFavorita: Cores.AZUL
} 

// d)
// mudado para acima