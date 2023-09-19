import { Router } from "express";
import exampleHandler from "../handlers/example.handler.js"

const router = Router();

router.get('/', exampleHandler.get);

export default router;
