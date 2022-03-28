import { Request, Response } from "express";
import AlunoRepository from "../repositories/Aluno";
import bindedInstance from "../utils/bindedInstance";

export class AlunoController {
  private repository: AlunoRepository;

  constructor() {
    this.repository = new AlunoRepository();
  }

  async registerAluno(req: Request, res: Response) {
    try {
      const aluno = await this.repository.create(req.body);
      res.status(201).json({ data: aluno });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updateAluno(req: Request, res: Response) {
    try {
      const aluno = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: aluno });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deleteAluno(req: Request, res: Response) {
    try {
      const aluno = await this.repository.delete(req.params.id);
      res.status(200).json({ data: aluno });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async consultAluno(req: Request, res: Response) {
    try {
      const aluno = await this.repository.get(req.params.id);
      res.status(200).json({ data: aluno });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(AlunoController);
