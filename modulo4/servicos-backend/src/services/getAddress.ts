import axios from 'axios'
import { Address } from '../types'

const BASE_URL = 'https://viacep.com.br/ws'

export const getAddress = async (cep: string): Promise<Address | null> => {
  const response = await axios.get(`${BASE_URL}/${cep}/json`)

  const address: Address = {
    Estado: response.data.uf,
    Cidade: response.data.localidade,
    Bairro: response.data.bairro,
    Logradouro: response.data.logradouro
  }

  return address
} 