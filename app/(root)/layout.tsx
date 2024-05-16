import MobileNav from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const loggedIn = {firstName: "Abubakar", LastName: "Muhammad"}
  return (

    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      <div className="size-full flex flex-col">
        <div className="root-layout">
          <Image
          src={"/icons/logo.svg"}
          width={30}
          height={30}
          alt="Logo"
          />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
      {children}
      </div>
    </main>
  );
};

export default RootLayout;
