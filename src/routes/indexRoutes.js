import { Router } from "express";
import { getIndex } from "../controllers/indexControllers.js";


const router = Router()

router.get('/', getIndex)


export default router