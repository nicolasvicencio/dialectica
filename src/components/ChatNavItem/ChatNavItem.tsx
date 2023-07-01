import { useGlobalStore } from "@/constants/store/store";
import { Chat } from "@/types/types";
import Link from "next/link";

type Props = {
  chat: Chat;
};

export default function ChatNavItem({ chat }: Props) {
  const { navOpen } = useGlobalStore();
  return (
    <Link
      key={chat.id}
      href={{
        pathname: `/chat/${chat.id}`,
        query: {
          chat_name: chat.chat_name,
          target_language: chat.target_language,
          chat_id: chat.id,
        },
      }}
      className="flex items-center justify-between gap-4 text-xs hover:bg-stone-200 p-2 pl-4 transition-all "
    >
      <div className=" w-10 h-10 rounded-full bg-sky-600 flex justify-center items-center text-white font-bold text-xs">
        En
      </div>
      <div className={`${navOpen && "hidden "} lg:block`}>
        <h4 className="font-semibold text-sky-700">
          {chat.chat_name.toUpperCase()}
        </h4>
        <p className="text-gray-500">Lorem ipsum dolor si Lorem ipsu....</p>
      </div>
      <div className="hidden lg-block rounded-xl w-7 h-5 lg:flex lg:justify-center lg:items-center text-sky-600 font-bold lg:self-center">
        ⌥
      </div>
    </Link>
  );
}