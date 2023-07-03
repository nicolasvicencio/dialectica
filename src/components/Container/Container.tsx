import React from "react";
import { NavBar } from "../NavBar";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex mx-auto">
      <NavBar />
      {children}
    </div>
  );
}
