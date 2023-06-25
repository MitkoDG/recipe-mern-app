import { NavLink } from "react-router-dom";

export const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <NavLink exact="true" to="/" activeClassname="active">
          Home
        </NavLink>
        <NavLink to="/create-recipe" activeClassname="active">
          Create Recipe
        </NavLink>
        <NavLink to="/saved-recipe" activeClassname="active">
          Saved Recipe
        </NavLink>
        <NavLink to="/auth" activeClassname="active">
          Login / Register
        </NavLink>
      </nav>
      {children}
    </div>
  );
};
