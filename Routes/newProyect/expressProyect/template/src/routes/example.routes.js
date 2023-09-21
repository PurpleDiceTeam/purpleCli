import { Router } from "express";
import exampleHandler from "../handlers/example.handler.js"

const router = Router();

router.post('/:id', exampleHandler.create);

router.get('/', exampleHandler.findAll);

router.get('/:id', exampleHandler.findOne);

router.put('/:id', exampleHandler.update);

router.delete('/:id', exampleHandler.delete);

export default router;
