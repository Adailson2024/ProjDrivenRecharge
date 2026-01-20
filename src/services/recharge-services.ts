import * as rechargeRepository from '../repositories/recharge-repositories';
import { RechargeInput } from "../protocols";

export async function createRecharge(data: RechargeInput) {
  
  if (data.value < 1000 || data.value > 100000) {
    throw { type: "UnprocessableEntity", message: "Valor inválido" };
  }

  const phoneExists = await rechargeRepository.findPhoneById(data.phoneId);
  if (!phoneExists) {
    throw { type: "NotFound", message: "Telefone não cadastrado." };
  }

  return await rechargeRepository.insertRecharge(data);
}

export async function getRechargesByNumber(number: string) {
  
  const recharges = await rechargeRepository.getRechargesByPhoneNumber(number);

  
  
  return recharges;
}