import { useContext } from "react";
import { Dropdown } from "../ui/Dropdown";
import { LogOut, User } from "lucide-react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const NavbarUserDropdown = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/login");
  };
  console.log(currentUser);

  return (
    <Dropdown
      trigger={<User size={30} className="cursor-pointer" />}
      items={[
        {
          label: "Log Out",
          icon: <LogOut size={16} />,
          onClick: handleLogout,
        },
      ]}
    />
  );
};
