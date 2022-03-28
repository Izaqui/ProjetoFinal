import { Professor } from "../entities/professor";
import { ProfessorModel } from "../model/professorModel";
import { ObjectId } from "mongoose";

class ProfessorRepository {
  async create(professor: Professor) {
    return ProfessorModel.create(professor);
  }

  async update(id: string, professor: Professor) {
    return ProfessorModel.findByIdAndUpdate(id, professor, {
      returnOriginal: false,
    }).exec();
  }

  async get(id: ObjectId | string) {
    return ProfessorModel.findById(id).exec();
  }

  async delete(id: string) {
    return ProfessorModel.findByIdAndDelete(id).exec();
  }
}

export default ProfessorRepository;
