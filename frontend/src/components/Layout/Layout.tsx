import React from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ showSidebar = true, children }) => {
  return (
    <>
      {showSidebar && <Sidebar />}
      <div className={showSidebar ? "ml-52 p-4" : "p-4"}>{children}</div>
    </>
  );
};

export default Layout;
