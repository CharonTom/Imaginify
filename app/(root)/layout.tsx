import Mobilenav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <Mobilenav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default layout;
