import * as mongoose from "mongoose";


import { dbDebug } from "../debug";

export default function configMongoDB() {
  mongoose
    .connect(process.env.MONGO_URL!)
    .then(() =>
      dbDebug(`Conectado ao banco de dados em ${process.env.MONGO_URL}`)
    )
    .catch((err) => {
      dbDebug("Falha de acesso ao banco de dados");
      dbDebug(err);
    });
}
