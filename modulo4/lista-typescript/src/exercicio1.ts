function msgNameAndBirth(name: string, birth: string): string {

    let outputMsg = ''
    let birthArray = birth.split('/')

    outputMsg = `Olá me chamo ${name}, nasci no dia ${birthArray[0]} do mês ${birthArray[1]} do ano de ${birthArray[2]}`

    return outputMsg
}

console.log(msgNameAndBirth('Cesar', '21/05/1987'))