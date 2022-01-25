type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function selectPotentialClients(clientes: Cliente[]): Cliente[] {
    let potentialClientsArray = clientes.filter(cliente => {
        let totalDebitos = cliente.debitos.reduce((total, current) => {return total + current}, 0)
        let saldoAtual = cliente.saldoTotal - totalDebitos
        if (saldoAtual < 0) {
            return cliente
        }
    }).map(cliente => {
        let totalDebitos = cliente.debitos.reduce((total, current) => {return total + current}, 0)
        cliente.saldoTotal = cliente.saldoTotal - totalDebitos
        cliente.debitos = []
        return cliente
    })

    return potentialClientsArray
}

console.log(selectPotentialClients(clientes))