import { Router } from "express";
import { getSummary } from "../controllers/summary-controllers";

const summaryRouter = Router();

summaryRouter.get("/summary/:document", getSummary);

export default summaryRouter;