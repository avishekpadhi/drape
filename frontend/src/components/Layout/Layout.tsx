import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ showSidebar = true, children }) => {
  return (
    <>
      <Navbar />
      {showSidebar && <Sidebar />}
      <div className={`mt-14 p-4${showSidebar ? " ml-52" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
