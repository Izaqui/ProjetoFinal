import { Router } from "express";
import ProfessorController from "../control/professorCOntroller";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.post("/", validateRequestSchema, ProfessorController.registerProfessor),
  router.get("/:cpf", ProfessorController.consultProfessor),
  router.delete("/:cpf", ProfessorController.deleteProfessor),
  router.put("/:cpf", validateRequestSchema, ProfessorController.updateProfessor),
];
