import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = ({ children }) => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <div>
      <nav className="navbar">
        <NavLink exact="true" to="/" activelassname="active">
          Home
        </NavLink>
        <NavLink to="/create-recipe" activelassname="active">
          Create Recipe
        </NavLink>
        <NavLink to="/saved-recipe" activelassname="active">
          Saved Recipe
        </NavLink>
        {!cookies.access_token ? (
          <NavLink to="/auth" activelassname="active">
            Login / Register
          </NavLink>
        ) : (
          <button onClick={logout}> Logout</button>
        )}
      </nav>
      {children}
    </div>
  );
};
