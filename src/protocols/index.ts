export type Phone = {
  id: number;
  number: string;
  carrierId: number;
  name: string;
  description: string;
  cpf: string;
};

export type PhoneInput = Omit<Phone, "id">;

export type Recharge = {
  id: number;
  phoneId: number;
  value: number;
  createdAt: Date | string;
};

export type RechargeInput = Omit<Recharge, "id" | "createdAt">;

export type SummaryResponse = {
  document: string;
  phones: {
    id: number;
    number: string;
    name: string;
    description: string;
    carrier: {
      id: number;
      name: string;
      code: number;
    };
    recharges: Recharge[];
  }[];
};
