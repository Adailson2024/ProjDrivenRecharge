import { Router } from "express";
import phoneRouter from "./phone-routers";
import rechargeRouter from "./recharge-routers";
import summaryRouter from "./summary-routers";

const router = Router();

router.use(phoneRouter);    
router.use(rechargeRouter); 
router.use(summaryRouter);  

export default router;