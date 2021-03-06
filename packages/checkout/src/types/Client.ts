import { Address } from './Address'

export interface Client {
  id?: number
  name?: string
  surname?: string
  secondSurname?: string
  identificationType?: string
  identificationDocument?: string
  email?: string
  birthDate?: string
  billingAddress?: Address
  phone?: string
  iban?: string
}
