import Filter from "../Filter/Filter";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-14 left-0 h-screen w-56 bg-gray-100 shadow-md p-4">
        <Filter />
      </div>
    </>
  );
};

export default Sidebar;
