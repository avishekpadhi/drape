import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-52 p-4">{children}</div>
    </>
  );
};

export default Layout;
