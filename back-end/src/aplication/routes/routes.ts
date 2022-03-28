import { Router } from "express";
import postsRouter from "./posts-router";
import alunoRouter from "./aluno-router";
import professorRouter from "./professor-routes"

const router = Router();
//Rotas post
router.use("/posts", postsRouter);
//Rotas Aluno
router.use("/aluno", alunoRouter);
//Rotas Pofessor
router.use("/professor", professorRouter);

router.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome" });
});

router.get("*", (_, res) => {
  res.status(404).json({ message: "Data not found" });
});

export default router;
