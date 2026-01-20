import * as phoneRepository from "../repositories/phone-repositories";
import * as rechargeRepository from "../repositories/recharge-repositories";

export async function getCustomerSummary(cpf: string) {
  const phones = await phoneRepository.findFullPhoneDataByCpf(cpf);
  
  
  const phonesWithRecharges = await Promise.all(
    phones.map(async (phone) => {
      const recharges = await rechargeRepository.getRechargesByPhoneId(phone.id);
      return {
        ...phone,
        carrier: {
          id: phone.carrierId,
          name: phone.carrierName,
          code: phone.carrierCode
        },
        recharges
      };
    })
  );

  return {
    document: cpf,
    phones: phonesWithRecharges
  };
}