import mongoose, { Model, model, Schema } from "mongoose";
import UserInterface from "../interfaces/user";

const UserSchema = new Schema<UserInterface>(
  {
    username: { required: true, type: String, unique: true },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },
  },
  { timestamps: true },
);

const UserModel: Model<UserInterface> =
  mongoose.models.User || model<UserInterface>("User", UserSchema);
export default UserModel;
