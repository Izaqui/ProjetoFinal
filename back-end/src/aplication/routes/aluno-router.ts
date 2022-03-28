import { Router } from "express";
import AlunoController from "../control/AlunoController";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.post("/", validateRequestSchema, AlunoController.registerAluno),
  router.get("/:id", AlunoController.consultAluno),
  router.delete("/:id", AlunoController.deleteAluno),
  router.put("/:id", validateRequestSchema, AlunoController.updateAluno),
];
