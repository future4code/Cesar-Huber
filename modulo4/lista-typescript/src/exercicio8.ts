function validaRenovacaoDocumento(nascimento: string, emissao: string): boolean {
    const nascimentoStrArr: string[] = nascimento.split('/')
    const nascimentoDate: Date = new Date(Number(nascimentoStrArr[2]), Number(nascimentoStrArr[1])-1, Number(nascimentoStrArr[0]))

    const emissaoStrArr: string[] = emissao.split('/')
    const emissaoDate: Date = new Date(Number(emissaoStrArr[2]), Number(emissaoStrArr[1])-1, Number(emissaoStrArr[0]))

    const atualDate: Date = new Date()

    const idade: number = Math.floor((atualDate.valueOf() - nascimentoDate.valueOf()) / 1000 / 60 / 60 / 24 / 365)
    const tempoEmissao: number = Math.floor((atualDate.valueOf() - emissaoDate.valueOf()) / 1000 / 60 / 60 / 24 / 365)

    console.log('idade: ', idade)
    console.log('tempoEmissao: ', tempoEmissao)

    if (idade <= 20 && tempoEmissao >= 5) {return true}
    if (idade <= 50 && tempoEmissao >= 10) {return true}
    if (idade > 50 && tempoEmissao >= 15) {return true}
    return false
}

console.log(validaRenovacaoDocumento('21/05/1987', '01/02/2012'))