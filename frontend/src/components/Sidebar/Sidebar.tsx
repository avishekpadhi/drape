import React from "react";
import { GenderFilter } from "../Filter/GenderFilter";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-52 bg-gray-100 shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Drape</h2>

        <GenderFilter />
      </div>
    </>
  );
};

export default Sidebar;
