import { Query } from "mongoose";
import UserInterface from "../interfaces/user";
import UserModel from "../models/User";

export const isUser = async (data: Partial<UserInterface>) => {
  if (!(await UserModel.exists(data))) return false;
  return true;
};
export const addUser = async (data: UserInterface) => {
  if (!isUser(data)) throw new Error("Invalid Credentials");
  return await UserModel.insertOne(data);
};

export const findUser = async (query: Query<UserInterface, UserInterface>) => {
  return await UserModel.findOne(query);
};
