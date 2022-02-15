import { Industry } from "./Industry";
import { Client } from "./Interfaces";

export class IndustrialClient extends Industry implements Client {
  constructor(
    private industryRegistrationNumber: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
  }

  public getIndustryRegistrationNumber() {
    return this.industryRegistrationNumber
  }

  public calculateBill() {
    return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100
  }
}