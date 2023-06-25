import { NavLink } from "react-router-dom";

export const Navbar = ({ children }) => {
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
        <NavLink to="/auth" activelassname="active">
          Login / Register
        </NavLink>
      </nav>
      {children}
    </div>
  );
};
