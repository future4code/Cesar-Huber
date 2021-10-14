// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura:'))
  const largura = Number(prompt('Digite a largura:'))
  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual:'))
  const anoNascimento = Number(prompt('Digite o ano de seu nascimento:'))
  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome:')
  const idade = prompt('Digite a sua idade:')
  const email = prompt('Digite o seu email:')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Informe sua primeira cor favorita:')
  const corFavorita2 = prompt('Informe a sua segunda cor favorita:')
  const corFavorita3 = prompt('Informe a sua terceira cor favorita:')
  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  qtdIngressosNecessaria = custo / valorIngresso
  return qtdIngressosNecessaria
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  mesmoTamanho = string1.length === string2.length
  return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  novoArray0 = array[array.length - 1]
  novoArrayN = array[0]
  array.splice(0,1)
  array.pop()
  array.push(novoArrayN)
  array.splice(0,0,novoArray0)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  mesmoConteudo = string1.toLowerCase() === string2.toLowerCase()
  return mesmoConteudo 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'))
  const anoNascimento = Number(prompt('Informe o ano de seu nascimento:'))
  const anoEmissaoRg = Number(prompt('Informe o ano de emissão de seu documento de identidade:'))

  const idade = anoAtual - anoNascimento
  const tempoEmissao = anoAtual - anoEmissaoRg

  const renovarRG20anos = idade <= 20 && tempoEmissao >= 5
  const renovarRG50anos = idade <= 50 && idade > 20 && tempoEmissao >= 10
  const renovarRG50mais = idade > 50 && tempoEmissao >= 15
  
  console.log(renovarRG20anos || renovarRG50anos || renovarRG50mais)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiploDe400 = ano % 400 === 0 
  const multiploDe4 = ano % 4 === 0 
  const multiploDe100 = ano % 100 === 0 

  anoBissexto = multiploDe400 || (multiploDe4 && !multiploDe100)

  return anoBissexto
  // confesso que tive que usar o excel pra criar essa lógica da forma correta... kkk
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt('Você tem mais de 18 anos?')
  const ensinoMedioCompleto = prompt('Você já completou o ensino médio?')
  const possuiDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  validadeConfirmada = maiorIdade === "sim" && ensinoMedioCompleto === "sim" && possuiDisponibilidade === "sim"

  console.log(validadeConfirmada)
}