import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/create-recipe" activeClassName="active">
        Create Recipe
      </NavLink>
      <NavLink to="/saved-recipe" activeClassName="active">
        Saved Recipe
      </NavLink>
      <NavLink to="/auth" activeClassName="active">
        Login/Register
      </NavLink>
    </div>
  );
};
