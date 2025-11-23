"use server";
import OpenAi from "openai";
import { loadType } from "../interfaces/load";

export const askAi = async (loads: loadType[]) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const baseURL = "https://generativelanguage.googleapis.com/v1beta/openai/";
    if (!apiKey) throw new Error("AI API KEY NOT PROVIDED");
    const client = new OpenAi({ apiKey, baseURL });
    let prompt = "";
    for (const load of loads) {
      prompt += `Name:${load.name},Power:${load.watts},Hours:${load.hours}\n`;
    }
    const response = await client.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content:
            "You are a Solar energy expert based on the following loads give the best type of inverter,PV module and battery with their detailed specifications",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    return response.choices[0].message.content;
  } catch (e) {
    console.error("Error: ", e);
    return { message: "Error occured in ai" };
  }
};
