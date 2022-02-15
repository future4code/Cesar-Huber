// -------- HERANÇA --------
// 1 a) não, pois ela está definida como private e não tem um método get para pegar este atributo
// 1 b) 1x

import { Commerce } from "./Commerce";
import { Customer } from "./Customer";
import { Industry } from "./Industry";
import { Client } from "./Interfaces";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User";

const cesar = new User('123', 'cesar@g.com', 'Cesar', 'senhaboa123')

// 2 a) 1x
// 2 b) 1x. Porque Customer chama User, que no constructor tem o console log.

const cesar2 = new Customer('123', 'cesar@g.com', 'Cesar', 'senhaboa123', '1234')

// 3 a) não. Porque senha está como atributo privado, não protected.
console.log({name: cesar2.getName(),
email: cesar2.getEmail(),
id: cesar2.getId(),
cc: cesar2.getCreditCard()})

// 4/5) 
console.log(cesar2.introduceYourself())

// -------- POLIMORFISMO --------
// 1 a) consegui imprimir os atributos. A função calculateBill saiu como [Function: calculateBill]
const client: Client = {
  name: "Cesar",
  registrationNumber: 123,
  consumedEnergy: 80,

  calculateBill: () => {
    return 2;
  }
}

console.log(client)

// 2 a) Não é possível criar uma instância de uma classe abstrata.
// 2 b) chamar ela num subclasse
// const place = new Place()

// 3
const residence = new Residence(2, '01234567')
const commerce = new Commerce(5, '01245678')
const industry = new Industry(10, '12345678')

console.log(residence, commerce, industry)
