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

export const findUser = async (data: Partial<UserInterface>) => {
  return await UserModel.findOne(data);
};

export const findById = async (id: string) => {
  return await UserModel.findById(id);
};
