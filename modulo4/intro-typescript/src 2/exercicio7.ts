function convertDNAtoRNA(dna: string):string {

    const converter: {[index: string]: string} = {
        A: 'U',
        T: 'A',
        C: 'G',
        G: 'C'
    }

    const rna: string = dna.split('').map((c) => {return converter[c]}).join('')

    return rna
}

console.log(convertDNAtoRNA('ATTGCTGCGCATTAACGACGCGTA'))