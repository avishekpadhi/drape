import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-52 p-4">{children}</div>
    </>
  );
};

export default Layout;
