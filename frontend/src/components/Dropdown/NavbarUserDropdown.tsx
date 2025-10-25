import { useContext } from "react";
import { Dropdown } from "../ui/Dropdown";
import { LogOut, User, LogIn } from "lucide-react";
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

  const handleLogin = () => {
    navigate("/login");
  };

  const items = currentUser
    ? [
        {
          label: "Log Out",
          icon: <LogOut size={16} />,
          onClick: handleLogout,
        },
      ]
    : [
        {
          label: "Login",
          icon: <LogIn size={16} />,
          onClick: handleLogin,
        },
      ];

  return (
    <Dropdown
      trigger={<User size={30} className="cursor-pointer" />}
      items={items}
    />
  );
};
