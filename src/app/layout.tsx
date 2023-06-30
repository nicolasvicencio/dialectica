import { NavBar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Language GPT",
  description: "Using GPT like you language companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex mx-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
