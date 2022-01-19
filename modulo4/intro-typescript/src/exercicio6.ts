function variasOperacoesComNumeros(number1: number, number2: number):string {

    const sum = number1 + number2
    const sub = number1 - number2
    const mult = number1 * number2
    let biggest = 0
    if (number1 > number2) {
        biggest = number1
    }
    else {
        biggest = number2
    }

    return `A soma dos números é ${sum}, a subtração deles é ${sub}, a multiplicação é ${mult} e o maior deles é o ${biggest}.`
}

const number1: number = Number(process.argv[2])
const number2: number = Number(process.argv[3])

console.log(variasOperacoesComNumeros(number1, number2))