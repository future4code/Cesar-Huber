import { Commerce } from "./Commerce";
import { Client } from "./Interfaces";


export class CommercialClient extends Commerce implements Client {
  constructor (
    private cnpj: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public calculateBill(): number {
      return this.consumedEnergy * 0.53
  }
}