import { Professor } from "../entities/professor";
import { model, Schema } from "mongoose";

const ProfessorShema = new Schema<Professor>({
  name: String,
  email: String,
});

export const ProfessorModel = model<Professor>("Professor", ProfessorShema, "professor");
export default ProfessorModel;
