import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import { phoneSchema } from "../schemas/phone-schema";
import { postPhone, getPhones } from "../controllers/phones-controllers";

const phoneRouter = Router();

phoneRouter.post("/phones", validateSchema(phoneSchema), postPhone);

phoneRouter.get("/phones/:document", getPhones);

export default phoneRouter;