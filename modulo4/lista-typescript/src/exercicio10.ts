const arrDV1: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2]
const arrDV2: number[] = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

function validarCPF(cpf: string): boolean {

    const cpfArr: string[] = cpf.replace(/[^0-9 ]/g, "").split('')
    const dv1: number = Number(cpfArr[9])
    const dv2: number = Number(cpfArr[10])
    const cpfDV1CalcArr: string[] = cpfArr.slice(0, 9)
    const cpfDV2CalcArr: string[] = cpfArr.slice(0, 10)
    let calcDV1: number = 0
    let calcDV2: number = 0
    const calc1: number = 11 - (cpfDV1CalcArr.reduce(function (r, a, i) { return r + Number(a) * arrDV1[i] }, 0) % 11)
    const calc2: number = 11 - (cpfDV2CalcArr.reduce(function (r, a, i) { return r + Number(a) * arrDV2[i] }, 0) % 11)

    if (calc1 < 10) { calcDV1 = calc1 }
    if (calc2 < 10) { calcDV2 = calc2 }

    if (dv1 === calcDV1 && dv2 === calcDV2) {
        return true
    } else {
        return false
    }
}

console.log(validarCPF('600.041.210-07'))