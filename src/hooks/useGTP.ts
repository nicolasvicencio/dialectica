import { OpenAIMessage } from "@/types/types";

type Props = {
  url: string;
  body: OpenAIMessage[];
};
export default async function useGPT({ url, body }: Props) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const response = await res.json();
  return response;
}
