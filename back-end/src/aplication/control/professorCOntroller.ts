import { Request, Response } from "express";
import ProfessorRepository from "../repositories/Professor";
import bindedInstance from "../utils/bindedInstance";

export class professorController {
  private repository: ProfessorRepository;

  constructor() {
    this.repository = new ProfessorRepository();
  }

  async registerProfessor(req: Request, res: Response) {
    try {
      const professor = await this.repository.create(req.body);
      res.status(201).json({ data: professor });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updateProfessor(req: Request, res: Response) {
    try {
      const professor = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: professor });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deleteProfessor(req: Request, res: Response) {
    try {
      const professor = await this.repository.delete(req.params.id);
      res.status(200).json({ data: professor });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async consultProfessor(req: Request, res: Response) {
    try {
      const professor = await this.repository.get(req.params.id);
      res.status(200).json({ data: professor });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(professorController);
