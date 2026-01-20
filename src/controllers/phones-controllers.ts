import { Request, Response } from "express";
import httpStatus from "http-status";
import * as phoneService from "../services/phone-services";
import { PhoneInput } from "../protocols";

export async function postPhone(req: Request, res: Response) {
  const phoneData = req.body as PhoneInput;

  
  const newPhone = await phoneService.createPhone(phoneData);

  
  res.status(httpStatus.CREATED).send(newPhone);
}

export async function getPhones(req: Request, res: Response) {
 
  const document = req.params.document as string;

  const phones = await phoneService.getPhonesByCpf(document);

  res.status(httpStatus.OK).send(phones);
}