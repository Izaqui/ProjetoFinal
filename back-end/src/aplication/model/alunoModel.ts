import { Aluno } from "../entities/aluno";
import { model, Schema } from "mongoose";

const AlunoShema = new Schema<Aluno>({
  name: String,
  matricula: String,
  email: String,
  senha: String
});

export const AlunoModel = model<Aluno>("Aluno", AlunoShema, "aluno");
export default AlunoModel;
