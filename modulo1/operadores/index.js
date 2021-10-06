
// ----------------------------------------
// INTERPRETAÇÃO DE CÓDIGO
// ----------------------------------------
// 1.
// a. false
// b. false
// c. true
// d. boolean

// -------------------------------------------------------------------
//2. será impresso a concatenação das variáveis primeiroNumero e segundoNumero, ao invés de ser realizada a soma destes dois números como inicialmente esperado. 

// -------------------------------------------------------------------
//3. Para que seja realizada a soma, é necessário primeiro converter ambas as váriaveis para o tipo número, com o comando Number(primeiroNumero) e Number(segundoNumero).

// ----------------------------------------
// ESCRITA DE CÓDIGO
// ----------------------------------------
// 1.
// a) idade do usuário
// b) idade d@ melhor amig@
// c) imprimir no console se sua idade é maior que a d@ seu/sua amig@ (boolean)
// d) imprimir diferença entre idades no console

const idadeUsuario = prompt("Informe a sua idade:")
const idadeMelhorAmigo = prompt("Informa a idade do(a) seu/sua melhor amigo(a):")
const diferencaIdades = Number(idadeUsuario) - Number(idadeMelhorAmigo)

console.log("Sua idade é maior que do(a) seu/sua amigo(a)?", diferencaIdades > 0)
console.log("Vocês tem", diferencaIdades, "ano(s) de diferença.")

// -------------------------------------------------------------------
// 2.
// a) pedir inserção de número par
// b) imprimir resto da divisão desse número por 2
// c) testar com diversos números pares. Escrever em um comentário de código se notei algum padrão
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const inputNumeroPar = prompt("Insira um número par:")
let numeroPar = Number(inputNumeroPar)

console.log(numeroPar % 2)

// Resposta c: Sempre que for informado um número par, o resto da divisão por 2 será 0. 
// Resposta d: Quando for informado um número ímpar, o resto da divisão por 2 será sempre 1.

// -------------------------------------------------------------------
// 3. Perguntar idade em anos
// a) imprimir idade em meses
// b) imprimir idade em dias
// c) imprimir idade em horas

const inputIdadeAnos = prompt("Informe sua idade em anos:")
let idadeAnos = Number(inputIdadeAnos)
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 365
let idadeHoras = idadeDias * 24

console.log("Isso equivale a", idadeMeses, "meses,", idadeDias, "dias e", idadeHoras, "horas.")

// -------------------------------------------------------------------
// 4. Perguntar 2 números
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true
// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const primeiroNumero = prompt("Informe o primeiro número:")
const segundoNumero = prompt("Informe o segundo número:")
n1 = Number(primeiroNumero)
n2 = Number(segundoNumero)

console.log("O primeiro número é maior que o segundo?", n1 > n2)
console.log("O primeiro número é igual ao segundo?", n1 === n2)
console.log("O primeiro número é divisível pelo segundo?", n1 % n2 === 0)
console.log("O segundo número é divisível pelo primeiro?", n2 % n1 === 0)

// -------------------------------------------------------------------
// DESAFIOS
// -------------------------------------------------------------------
// 1. Conversão de Temperaturas
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// C para K = C + 273.15
// C para F = (C * 9 / 5) + 32
// K para C = K - 273.15
// F para C = (F - 32) * 5 / 9
// F para K = (F - 32) * 5 / 9 + 273.15
const inputC = prompt("Informe a temperatura em °C:")
let C = Number(inputC)

console.log("a) 77°F equivale a ", (77 - 32) * 5 / 9 + 273.15, "K")
console.log("b) 80°C equivale a ", (80 * 9 / 5) + 32, "°F")
console.log("c) 30°C equivale a ", (30 * 9 / 5) + 32, "°F e", 30 + 273.15, "K")
console.log("d) 30°C equivale a ", (C * 9 / 5) + 32, "°F e", C + 273.15, "K")

// 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
//     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
//     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

const custoKwh = 0.05
const pctDesconto = 0.15

let inputKwhConsumido = prompt("Informe a quantidade de quilowatt-hora consumido:")
kwhConsumido = Number(inputKwhConsumido)
let custoTotal = kwhConsumido * custoKwh
let custoTotalComDesconto = custoTotal * (1 - pctDesconto)

console.log("a) O custo total a ser pago por ter consumido 280 quilowatt-hora é de: R$", custoTotal)

console.log("b) Considerando 15% de desconto, o valor total a ser pago é de: R$", custoTotalComDesconto)

// 3. Conversão de medidas
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// `20lb equivalem a X kg`

const inputLb = prompt("Informe o peso em lb")
let lb = Number(inputLb)
let Kg = lb / 2.205

console.log(lb, "lb equivalem a", Kg ,"kg")

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// `10.5oz equivalem a X kg`

const inputOz = prompt("Informe o peso em oz")
let oz = Number(inputOz)
Kg = oz / 35.274

console.log(oz, "oz equivalem a", Kg ,"kg")

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// `100mi equivalem a X m`

const inputMi = prompt("Informe a distância em milhas")
let mi = Number(inputMi)
m = mi * 1609

console.log(mi, "mi equivalem a", m ,"m")

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// `50ft equivalem a X m`

const inputFt = prompt("Informe a distância em pés")
let ft = Number(inputFt)
m = ft * 1609

console.log(ft, "ft equivalem a", m ,"m")

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// `103.56gal equivalem a X l`

const inputGal = prompt("Informe o volume em galões")
let gal = Number(inputGal)
l = gal * 4.546

console.log(gal, "gal equivalem a", l,"l")

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// `450 xic equivalem a X l`

const inputXic = prompt("Informe o volume em xícaras")
let xic = Number(inputXic)
l = xic / 3.52

console.log(xic, "xic equivalem a", l,"l")

// g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

// feito para todos os anteriores.