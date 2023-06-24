import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact="true" to="/" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/create-recipe" activeclassname="active">
        Create Recipe
      </NavLink>
      <NavLink to="/saved-recipe" activeclassname="active">
        Saved Recipe
      </NavLink>
      <NavLink to="/auth" activeclassname="active">
        Login/Register
      </NavLink>
    </div>
  );
};
