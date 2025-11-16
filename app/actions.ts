"use server";

import { connectDB } from "@/app/lib/mongodb";
import { addUser, findUser, isUser } from "./db/services/User";
import { redirect } from "next/navigation";
import { createSession } from "@/app/lib/sessions";

export const loginAction = async (prevState: any, loginData: FormData) => {
  try {
    await connectDB();
    const password = loginData.get("password") as string;
    const email = loginData.get("email") as string;
    if (!(email && password)) {
      throw new Error("No email or password");
    }
    const user = await findUser({ email, password });
    if (!user) {
      throw new Error("User Not Found");
    }
    await createSession(user.id);
  } catch (error: any) {
    console.error(error);
    return { message: error?.message };
  }
  redirect("/");
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
    const user = await addUser({ username, email, password });
    await createSession(user.id);
    redirect("/");
  } catch (error: any) {
    console.error(error);
    return { message: error?.message };
  }
};
