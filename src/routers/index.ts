import { Router } from "express";
import phoneRouter from "./phone-routers";
import rechargeRouter from "./recharge-routers";
import summaryRouter from "./summary-routers";

const router = Router();
router.get('/', (req, res) => {
  res.json({ message: "API está funcionando no Render!" });
});
router.use(phoneRouter);    
router.use(rechargeRouter); 
router.use(summaryRouter);  

export default router;