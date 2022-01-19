function reverseString(str: string) {
    let revStr: string = ''

    revStr = str.split('').reverse().join('')

    return revStr
}

const str = process.argv[2]

console.log(reverseString(str))