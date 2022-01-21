function generateFactorial(word: string): number {
    const charsArray: string[] = word.split('')
    let anagrams = word.length
    for (let i = charsArray.length; i > 1; i--) {
        anagrams = anagrams * (i - 1)
    }
    return anagrams
}

console.log(generateFactorial('penduricalhos'))