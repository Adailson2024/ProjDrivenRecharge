import * as phoneRepository from "../repositories/phone-repositories";
import { PhoneInput } from "protocols";

export async function createPhone(data: PhoneInput) {
  
  const numberExists = await phoneRepository.findByNumber(data.number);
  if (numberExists) {
    throw { type: "Conflict", message: "Este número já está cadastrado." };
  }

  const userPhones = await phoneRepository.findByCpf(data.cpf);
  if (userPhones.length >= 3) {
    throw { type: "Conflict", message: "Limite de 3 telefones por CPF atingido." };
  }

  return await phoneRepository.insertPhone(data);
}

export async function getPhonesByCpf(cpf: string) {
  return await phoneRepository.findByCpf(cpf);
}