// PARTE 1 - Exercícios de Interpretação

//1. primeiro será impresso 10. Após a reatribuição de b recebe 5, será impresso 10 referente à variável a e 5 referente à variável b. Isso acontece porque na hora de declarar a variável, foi utilizado o comando let, que permite uma reatribuição em outros momentos do código.

//2. Neste caso, após as reatribuições (declaração com let), todas as variáveis ficam com o valor 10.

/*
3. eu atribuiria os seguintes nomes para as variáveis:
p -> horasTrabalhadasDia
t -> salarioDia
*/

// PARTE 2 - Escrita de Código

//1.
//a) 
let nome
//b)
let idade
//c)
console.log(typeof nome)
console.log(typeof idade)
//d)
// Usando a declaração com const, resulta em erro, visto que uma declaração constante requer um valor ou expressão atribuído à variável. Usando a declaração com let, resulta no tipo undefined, visto que não foi atribuído nenhum valor ou expressão à variável.

//e)
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

//f)
console.log(typeof nome)
console.log(typeof idade)
// o tipo de ambos retornou como string. Pode-se esperar que ao inputar um número no prompt que o tipo retorne como número, no entanto, por padrão, o prompt reconhece todo input como String. Para que o tipo da variável idade seja reconhecido como número após o input, é necessário realizar a conversão da variável para número, com o comando Number(idade).

//g)
console.log("Olá", nome, "você tem", idade, "anos.")

//2.
//a)
let consoleAberto = prompt("Você está com o seu console aberto?")
let extensaoLiveServer = prompt("Você está com a extensão Live Server instalada e rodando no VSCode?")
let telaDividida = prompt("Você está com a sua tela dividida, parte com o VSCode e parte com o navegador?")

//b)
console.log("Você está com o seu console aberto? -", consoleAberto)
console.log("Você está com a extensão Live Server instalada e rodando no VSCode? -", extensaoLiveServer)
console.log("Você está com a sua tela dividida, parte com o VSCode e parte com o navegador? -", telaDividida)

//3.
let a = 10
let b = 25
aTemp = b
bTemp = a
a = aTemp
b = bTemp

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio
let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
n1 = Number(n1)
n2 = Number(n2)

console.log("1.", n1, "somado a", n2, "resulta em :", n1 + n2)
console.log("2.", n1, "multiplicado por", n2, "resulta em :", n1 * n2)