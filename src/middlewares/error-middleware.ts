import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error.type === "NotFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "Conflict") {
  return res.status(httpStatus.CONFLICT).send(error.message);
}
  
  console.error(error);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno no servidor.");
}

