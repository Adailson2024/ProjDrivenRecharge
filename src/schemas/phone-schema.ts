import Joi from "joi";
import { PhoneInput } from "../protocols";

export const phoneSchema = Joi.object<PhoneInput>({
  number: Joi.string().min(11).max(11).required(), 
  carrierId: Joi.number().integer().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  cpf: Joi.string().min(11).max(11).required() 
});