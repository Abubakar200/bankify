import Sidebar from "@/components/sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      {children}
    </main>
  );
};

export default RootLayout;
