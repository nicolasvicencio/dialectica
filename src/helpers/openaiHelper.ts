import { CONFIG_MESSAGES, ROLE } from "@/constants/constans";
import { Chat } from "@/types/types";
import messagesHelper from "./messagesHelper";
import useGPT from "@/hooks/useGTP";

const url = "http://localhost:3000/api/send";
let requestMessage;

export default {
  configNewChat: async function (chat: Chat) {
    const parsedMessageContent = {
      role: ROLE.User,
      content: `{{ ${chat.target_language} }}`,
    };

    await messagesHelper.createNewMessage({
      chatId: chat.id!,
      message: parsedMessageContent,
    });

    requestMessage = [...CONFIG_MESSAGES, parsedMessageContent];
    const response = await useGPT({ url, body: requestMessage });
    const newMessage = await messagesHelper.createNewMessage({
      chatId: chat.id!,
      message: response,
    });

    if (newMessage) {
      return newMessage[0];
    }
  },
  sendMessageToGPT: async function (chat_id: string) {
    const messages = await messagesHelper.getMessages(chat_id);

    const parsedMessages = messages?.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    //@ts-ignore
    requestMessage = [...CONFIG_MESSAGES, ...parsedMessages];
    const response = await useGPT({ url, body: requestMessage });

    if (response) {
      console.log({ openairesponse: response });
    }
  },
};
