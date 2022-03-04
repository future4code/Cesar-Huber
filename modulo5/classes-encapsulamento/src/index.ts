type UserAccountType = {
  cpf: string,
  name: string,
  age: number,
  balance: number,
  transactions: TransactionType[]
}

type TransactionType = {
  description: string,
  value: number,
  date: string
}

// 1 a) o construtor numa classe serve para informar os parâmetros, como numa função, que serão lidos pela classe na hora de criar uma instância da classe.

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: TransactionType[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
     transactions: TransactionType[]
  ) {
     this.cpf = cpf
     this.name = name
     this.age = age
     this.transactions = transactions
  }

  public getAtributes(): UserAccountType {
    return {
      cpf: this.cpf,
      name: this.name,
      age: this.age,
      balance: this.balance,
      transactions: this.transactions
    }
  }

}

// 1 b) foi impressa uma vez na hora de criar cesar
// 1 c) criando um método GET para pegar as informações

// 2
class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
  }

  public getAtributes(): TransactionType {
    return {
      description: this.description, 
      value: this.value,
      date: this.date
    }
  }
}

const transactionsCesar = new Transaction('pedágio', 30, '11/02/2022')
const cesar = new UserAccount('123.456.789-10', 'Cesar', 34, [transactionsCesar.getAtributes()])

console.log(cesar.getAtributes())




