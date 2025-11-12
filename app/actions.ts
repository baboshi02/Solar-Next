"use server";

import { connectDB } from "@/lib/mongodb";
import { addUser, isUser } from "./db/services/User";

export const loginAction = async (prevState: any, loginData: FormData) => {
  try {
    await connectDB();
    const password = loginData.get("password") as string;
    const email = loginData.get("email") as string;
    if (!(email && password)) {
      throw new Error("No email or password");
    }
    if (!(await isUser({ email, password }))) {
      throw new Error("User Not Found");
    }
  } catch (e) {
    return { message: "There seems to be an error" };
  }
};

export const signinAction = async (precState: any, signInData: FormData) => {
  try {
    await connectDB();
    const username = signInData.get("username") as string;
    const password = signInData.get("password") as string;
    const email = signInData.get("email") as string;
    if (!(username && email && password)) {
      throw new Error("Please fillout all fields");
    }
    if (await isUser({ email })) {
      throw new Error("Email is already in use");
    }
    if (await isUser({ username })) {
      throw new Error("username is already in use");
    }
    console.log(await addUser({ username, email, password }));
  } catch (error: any) {
    return { message: error?.message };
  }
};
