import { Router } from "express";
import exampleRouter from "./example.routes.js"

const router = Router()

export default function routesApi(app) {

  app.use("/api/v1", router);

  router.use("/example", exampleRouter)
}
