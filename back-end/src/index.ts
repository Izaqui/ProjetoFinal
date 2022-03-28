import app from "./app";
import "dotenv";
import { serverDebug } from "./debug";

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  serverDebug(`servidor rodando na port ${PORT}`);
});
