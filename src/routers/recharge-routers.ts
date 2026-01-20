import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import { rechargeSchema } from "../schemas/recharge-schema";
import { postRecharge, getRecharges } from "../controllers/recharge-controllers";

const rechargeRouter = Router();

rechargeRouter.post("/recharges", validateSchema(rechargeSchema), postRecharge);

rechargeRouter.get("/recharges/:number", getRecharges);

export default rechargeRouter;