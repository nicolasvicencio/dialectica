import { NavBar, TopBar } from "@/components";
import "./globals.css";
import { Inter, Open_Sans, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["devanagari"], weight: ["500"] });

export const metadata = {
  title: "Dialectica",
  description: "Use GPT like you language companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex mx-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
