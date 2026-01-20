import { Request, Response } from "express";
import httpStatus from "http-status";
import * as summaryService from "../services/summary-services";

export async function getSummary(req: Request, res: Response) {
  
  const { document } = req.params as { document: string };
   
  const summary = await summaryService.getCustomerSummary(document);
  
    res.status(httpStatus.OK).send(summary);
}