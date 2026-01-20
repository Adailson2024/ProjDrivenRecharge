import { Request, Response } from "express";
import httpStatus from "http-status";
import * as rechargeService from "../services/recharge-services";
import { RechargeInput } from "../protocols";

export async function postRecharge(req: Request, res: Response) {
  const rechargeData = req.body as RechargeInput;
  const result = await rechargeService.createRecharge(rechargeData);
  res.status(httpStatus.CREATED).send(result);
}



export async function getRecharges(req: Request, res: Response) {
  const { number } = req.params as { number: string }; 
  
  
  const recharges = await rechargeService.getRechargesByNumber(number);
  
  res.status(httpStatus.OK).send(recharges);
}