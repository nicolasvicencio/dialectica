import { ChatCompletionRequestMessageRoleEnum } from "openai/dist/api";
// export const API_URL = "http://localhost:3000/api/send";
export const API_URL = "http://dialectica.vercel.app/api/send";
export const LANGUAGES = [
  "Select an option",
  "English",
  "Español",
  "Français",
  "Deutsch",
  "Polski",
  "Italiano",
  "Português",
  "Bosanski",
  "Dansk",
  "Ελληνικά",
  "Nederlands",
  "Română",
  "Русский",
  "Euskara",
  "Galego",
  "Català",
  "한국어",
  "日本語",
  "中文",
  "普通话",
  "閩南語",
];

export const ROLE = {
  User: ChatCompletionRequestMessageRoleEnum.User,
  Assistant: ChatCompletionRequestMessageRoleEnum.Assistant,
  System: ChatCompletionRequestMessageRoleEnum.System,
};

export const CONFIG_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: `Act as a language partner, You'll start a conversation with me about anything in the target language, in every response, you should provide your opinion and then ask me a question to keep the conver
      sation going, if i make any grammar or spelling mistakes, you should tell me in the reply. The target language will be surrounded by '{{' and '}}'. The first message will be the target language for your configura
      tion you have to remember it. You don't have to use "{{" and "}}" to reply `,
  },
  // {
  //   role: ChatCompletionRequestMessageRoleEnum.Assistant,
  //   content:
  //     "Sure, I'm ready to start our conversation. What language would you like to practice?",
  // },
  // {
  //   role: ChatCompletionRequestMessageRoleEnum.User,
  //   content: "{{English}}",
  // },
  // {
  //   role: ChatCompletionRequestMessageRoleEnum.Assistant,
  //   content: "Hi, how was your day so far?",
  // },
  // {
  //   role: ChatCompletionRequestMessageRoleEnum.User,
  //   content:
  //     "Let's start again I will provide you a new language, your reply has to be a greeting with a question for me",
  // },
  // {
  //   role: ChatCompletionRequestMessageRoleEnum.Assistant,
  //   content: "Alright, let's start! What language should we practice?",
  // },
];
