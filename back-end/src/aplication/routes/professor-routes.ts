import { Router } from "express";
import ProfessorController from "../control/professorCOntroller";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.post("/", validateRequestSchema, ProfessorController.registerProfessor),
  router.get("/:id", ProfessorController.consultProfessor),
  router.delete("/:id", ProfessorController.deleteProfessor),
  router.put("/:id", validateRequestSchema, ProfessorController.updateProfessor),
];
