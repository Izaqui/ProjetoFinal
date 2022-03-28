import { Post } from "../entities/post";
import { model, Schema } from "mongoose";

const PostShema = new Schema<Post>({
  name: String,
  description: String,
  image: String,
});

export const PostModel = model<Post>("Post", PostShema, "post");
export default PostModel;
