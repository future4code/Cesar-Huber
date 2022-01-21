enum ERA {
    AC = 'AC',
    DC = 'DC'
}

type Form = {ano: number, era: ERA | undefined | null | string}

const form: Form = {
    ano: -1500,
    era: ''
}

function discoverEra(form: Form): string {
    let anoAbsoluto = 0
    if (form.era === ERA.DC || form.era === undefined) {
        anoAbsoluto = Math.abs(form.ano)
    } else {
        anoAbsoluto = -form.ano
    }

    if (anoAbsoluto < -4000) {return 'Idade Pré-Histórica'}
    if (anoAbsoluto < 476) {return 'Idade Antiga'}
    if (anoAbsoluto < 1453) {return 'Idade Média'}   
    if (anoAbsoluto < 1789) {return 'Idade Moderna'}
    else {return 'Idade Contemporânea'}
}

console.log(discoverEra(form))
console.log(typeof(form.era))