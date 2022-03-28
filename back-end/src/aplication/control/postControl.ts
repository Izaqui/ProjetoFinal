import { Request, Response } from "express";
import Post from "../repositories/Post";
import bindedInstance from "../utils/bindedInstance";

export class PostControl {
  private repository: Post;

  constructor() {
    this.repository = new Post();
  }

  async getPost(req: Request, res: Response) {
    try {
      const posts = await this.repository.list();
      res.status(200).json({ data: posts });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async registerPost(req: Request, res: Response) {
    try {
      const posts = await this.repository.create(req.body);
      res.status(201).json({ data: posts });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const posts = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: posts });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async consultPost(req: Request, res: Response) {
    try {
      const posts = await this.repository.get(req.params.id);
      res.status(200).json({ data: posts });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const posts = await this.repository.delete(req.params.id);
      res.status(200).json({ data: posts });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(PostControl);
