import { Post } from "../entities/post";
import { PostModel } from "../model/postModel";
import { ObjectId } from "mongoose";

class PostRepository {
  async create(post: Post) {
    return PostModel.create(post);
  }

  async update(id: string, post: Post) {
    return PostModel.findByIdAndUpdate(id, post, {
      returnOriginal: false,
    }).exec();
  }

  async get(id: ObjectId | string) {
    return PostModel.findById(id).exec();
  }

  async delete(id: string) {
    return PostModel.findByIdAndDelete(id).exec();
  }

  async list() {
    return PostModel.find().exec();
  }
}

export default PostRepository;
