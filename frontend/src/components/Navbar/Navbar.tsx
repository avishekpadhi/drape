import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-white shadow z-50 flex items-center px-6">
      <Link to="/products">Drape</Link>
      <div className="flex-grow"></div>
      <Dropdown />
    </div>
  );
};

export default Navbar;
