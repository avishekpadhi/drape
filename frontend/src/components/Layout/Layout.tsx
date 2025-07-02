import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useFilter } from "../../context/FilterContext";

const Layout = ({ children }) => {
  const { selectedGender, setSelectedGender } = useFilter();
  return (
    <>
      <Sidebar />
      <div className="ml-52 p-4">{children}</div>
    </>
  );
};

export default Layout;
