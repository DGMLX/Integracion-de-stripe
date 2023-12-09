import {Router} from "express"
import { cancelarPago, generarPago, pagoRealizado } from "../controllers/pago.controllers.js";

const router = Router();

router.post("/generarPago",generarPago)
router.get("/pagoRealizado",pagoRealizado)
router.get("/cancelarPago",cancelarPago)


export default router;  