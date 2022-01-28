const instrutores = [
    {
        id: 01,
        nome: 'Mateus Gesualdo',
        idade: 26
    },
    {
        id: 02,
        nome: 'Leticia Chijo',
        idade: 25
    },
    {
        id: 03,
        nome: 'Fernanda Alfonsi',
        idade: 37
    }
]

const getUserById = (id) => {
    const user = instrutores.filter(instrutor => {
        if (instrutor.id === id) {
            return instrutor
        }
    })

    console.log(`${user[0].nome} ${user[0].idade} anos`)
}

getUserById(2)