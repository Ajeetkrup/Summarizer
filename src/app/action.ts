"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  GEMINI_API_KEY,
  GENERATION_CONFIG,
  MODEL_NAME,
  SAFETY_SETTINGS,
  SCHEMA,
} from "@/lib/constants";

export default async function submitMessageForm(formData: string) {
  "use server";

  const schema = SCHEMA;

  async function synthesize(content: string) {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const generationConfig = GENERATION_CONFIG;
    const safetySettings = SAFETY_SETTINGS;

    const parts = [
      {
        text: `Summarize the following content:${content}\nConstraints:* The summary should be concise and capture the main points of the content.* The summary should be no longer than 1/3 the length of the original content.*The summary should be written in a clear and concise manner, avoiding jargon and technical terms.* The summary should be objective and not contain any opinions or biases.* Send content in paragraph. * Summary should be atmost 40% of the content.`,
      },
    ];

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
      });

      const response = result.response.text();
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const data = JSON.parse(formData);
    const tempdata = schema.safeParse(data);
    if (!tempdata.success) {
      return { success: false, message: tempdata.error.issues[0].message };
    }

    const summarizedContent = await synthesize(tempdata.data.content);
    return { success: true, message: summarizedContent };
  } catch (err: unknown) {
    const error: { message: string } = err as { message: string };
    return { success: false, message: error.message };
  }
}
