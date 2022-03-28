import { Router } from "express";
import PostControl from "../control/postControl";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.get("/", PostControl.getPost),
  router.post("/", validateRequestSchema, PostControl.registerPost),
  router.get("/:id", PostControl.consultPost),
  router.delete("/:id", PostControl.deletePost),
  router.put("/:id", validateRequestSchema, PostControl.updatePost),
];
