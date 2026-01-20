import Joi from "joi";
import { RechargeInput } from "../protocols";

export const rechargeSchema = Joi.object<RechargeInput>({
  phoneId: Joi.number().integer().required(),
  value: Joi.number().integer().min(1000).max(100000).required()
});