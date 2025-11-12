import { Query } from "mongoose";
import UserInterface from "../interfaces/user";
import UserModel from "../models/User";

export const isUniqueUser = async (email: string, password: string) => {
  if (!(await UserModel.exists({ email }))) return false;
  if (!(await UserModel.exists({ password }))) return false;
  return true;
};
export const addUser = async (user: UserInterface) => {
  const isUniqueUserCredentials = await isUniqueUser(user.email, user.password);
  if (!isUniqueUserCredentials) throw new Error("Invalid Credentials");
  return await UserModel.insertOne(user);
};

export const findUser = async (query: Query<UserInterface, UserInterface>) => {
  return await UserModel.findOne(query);
};
