import { Aluno } from "../entities/aluno";
import { AlunoModel } from "../model/alunoModel";
import { ObjectId } from "mongoose";

class AlunoRepository {
  async create(aluno: Aluno) {
    return AlunoModel.create(aluno);
  }

  async update(id: string, aluno: Aluno) {
    return AlunoModel.findByIdAndUpdate(id, aluno, {
      returnOriginal: false,
    }).exec();
  }

  async get(id: ObjectId | string) {
    return AlunoModel.findById(id).exec();
  }

  async delete(id: string) {
    return AlunoModel.findByIdAndDelete(id).exec();
  }
}

export default AlunoRepository;
