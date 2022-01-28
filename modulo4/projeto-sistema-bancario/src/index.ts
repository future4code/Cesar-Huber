import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => { console.log('Server ON: 3003') })

type User = {
  id: number,
  name: string,
  cpf: string,
  birthday: string,
  balance: number,
  extract: Transaction[]
}

type Transaction = {
  amount: number,
  date: string,
  description: string
}

const dateStringToValue = (dateString: string): number => {
  const dateArray: string[] = dateString.split('/')
  const dateDate: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]))
  return dateDate.valueOf()
}

function currentDateString(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}

const calcAge = (dateValue: number): number => {
  const currentDateValue = Date.now()
  const age = Math.floor(currentDateValue - dateValue) / 1000 / 60 / 60 / 24 / 365
  return age
}

const errMsgAge = 'Agradecemos o interesse, mas para abrir sua conta conosco precisa ser maior de idade (18 anos ou mais).'

// GET Balance
app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, cpf } = req.body

    if (!name || !cpf) {
      errorCode = 422
      throw new Error('Alguma informação está faltando. Verifique Nome e/ou CPF.')
    }

    const user: User[] = users.filter(user => user.name.includes(name) && user.cpf === cpf)

    let updatedBalance = user[0].balance
    let lastPurchase: Transaction = user[0].extract[user[0].extract.length - 1]
    let totalExpenditure = 0
    for (let i = 0; i < user[0].extract.length; i++) {
      updatedBalance -= user[0].extract[i].amount
      totalExpenditure += user[0].extract[i].amount
    }

    res.send(`Seu saldo atual é de ${updatedBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. \n
    Sua última compra foi um(a) ${lastPurchase.description} feita em ${lastPurchase.date} no valor de ${lastPurchase.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. \n
    Seu gasto total no último período foi de ${totalExpenditure.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})

// POST Create Account
app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, cpf, birthday } = req.body
    const age: number = calcAge(dateStringToValue(birthday))
    const id = Date.now()

    if (!name || !cpf || !birthday) {
      errorCode = 422
      throw new Error('Alguma informação está faltando. Verifique Nome, CPF e/ou Data de Nascimento.')
    }
    if (users.findIndex(user => user.cpf === cpf) > -1) {
      errorCode = 422
      throw new Error('Já existe um usuário cadastrado com este CPF.')
    }
    if (age < 18) { throw new Error(errMsgAge) }

    const newAccount: User = {
      id,
      name,
      cpf,
      birthday,
      balance: 0,
      extract: []
    }

    users.push(newAccount)

    res.status(201).send('Conta criada com sucesso!')

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// POST Pay Bill (add to transaction)
app.post('/transactions', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, cpf, billValue, description} = req.body
    let {dueDate} = req.body

    if (billValue <= 0) {
      errorCode = 422
      throw new Error('O valor a ser pago deve ser maior que 0.')
    }

    if (!name || !cpf || !billValue || !description) {
      errorCode = 422
      throw new Error('Alguma informação está faltando. Verifique Nome, CPF, Valor de Pagamento e/ou Descrição.')
    }

    if (!dueDate) {
      dueDate = currentDateString()
    }

    const userIndex = users.findIndex(user => user.name.includes(name) && user.cpf === cpf)

    if (userIndex === -1) {
      errorCode = 404
      throw new Error('Usuário não encontrado. Verifique as informações passadas e tente novamente.')
    }

    let updatedBalance = users[userIndex].balance
    for (let i = 0; i < users[userIndex].extract.length; i++) {
      updatedBalance -= users[userIndex].extract[i].amount
    }

    if (updatedBalance < billValue) {
      throw new Error('Saldo Insuficiente para pagar a conta.')
    }

    updatedBalance -= billValue

    users[userIndex].extract.push({
      amount: billValue,
      date: dueDate,
      description
    })

    res.status(201).send(`Conta paga com sucesso. Saldo atual ${updatedBalance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// PUT Add Money
app.put('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, cpf, amount} = req.body

    if (amount <= 0) {
      errorCode = 422
      throw new Error('O valor a ser depositado deve ser maior que 0.')
    }
    if (!name || !cpf || !amount) {
      errorCode = 422
      throw new Error('Alguma informação está faltando. Verifique Nome, CPF e/ou Valor de Depósito.')
    }
    
    const userIndex = users.findIndex(user => user.name.includes(name) && user.cpf === cpf)

    if (userIndex === -1) {
      errorCode = 404
      throw new Error('Usuário não encontrado. Verifique as informações passadas e tente novamente.')
    }

    const user: User[] = users.filter(user => user.name.includes(name) && user.cpf === cpf)

    let updatedBalance = user[0].balance
    for (let i = 0; i < user[0].extract.length; i++) {
      updatedBalance -= user[0].extract[i].amount
    }

    updatedBalance = users[userIndex].balance + amount

    user[userIndex].balance += amount

    res.send(`Valor de ${amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} adicionado com sucesso. \n 
    Saldo atualizado de ${updatedBalance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

