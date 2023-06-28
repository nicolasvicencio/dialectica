import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_KEY,
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
