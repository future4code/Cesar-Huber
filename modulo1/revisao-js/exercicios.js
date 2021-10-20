// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    arrayInvertido = []
    for (i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    arrayOrdenado = []
    arrayOrdenado.push(array[0])
    for (i = 1; i < array.length; i++) {
        if (array[i] < arrayOrdenado[i - 1]) {
            arrayOrdenado.splice(0, 0, array[i])
        }
        else {
            arrayOrdenado.push(array[i])
        }
    }
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i])
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevados = []
    for (let num of array) {
        if (num % 2 === 0) {
            arrayParesElevados.push(num * num)
        }
    }
    return arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for  (let num of array) {
        if (num > maiorNumero) {maiorNumero = num}
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
    let maiorDivisivel = false
    let diferenca = 0


    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    }
    else {
        maiorNumero = num2
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivel = true
    }

    diferenca = maiorNumero - menorNumero

    const objetoNumeros = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivel,
        diferenca: diferenca
    }

    return objetoNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = [0]
    let i = 0
    while (i < n - 1) {
        primeirosPares.push(primeirosPares[i] + 2)
        i++
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) { return "Equilátero" }
    else if ( 
        ladoA === ladoB || 
        ladoA === ladoC ||
        ladoB === ladoC
        ) { return "Isósceles" }
    else { return "Escaleno" }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a,b){return a-b})
    let segundoMaior = array[array.length - 2]
    let segundoMenor = array[1]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    // "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."
    // tratamento atores
    console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(' ')}.`)
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoaAnonima = {...pessoa, nome: "ANÔNIMO"}
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let idadeMinima = 14
    let idadeMaxima = 60
    let alturaMinima = 1.5
    let pessoasAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > idadeMinima && pessoa.idade < idadeMaxima && pessoa.altura >= alturaMinima)
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let idadeMinima = 14
    let idadeMaxima = 60
    let alturaMinima = 1.5
    let pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.idade <= idadeMinima || pessoa.idade >= idadeMaxima || pessoa.altura < alturaMinima
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let conta of contas) {
        let compraTotal = 0
        let i = 0
        while (i < conta.compras.length) {
            compraTotal += conta.compras[i]
            i++
        }
        conta.saldoTotal -= compraTotal
        conta.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function tratarData(data) {
        let parts = data.split("/")
        return new Date(parts[2], parts[1] - 1, parts[0])
    }

    for (let item of consultas) {
        item["dataTratada"] = tratarData(item.dataDaConsulta) 
    }

    consultas.sort((a, b) => {return new Date(a.dataTratada) - new Date(b.dataTratada)})

    consultas.forEach((i) => {delete i.dataTratada})

    return consultas

}