import { NavLink } from "react-router-dom";

const Navlink = ({ to }) => {
  return (
    <li className="nav-items">
      <NavLink to={to === "home" ? "/" : `/${to}`} className="nav-link">
        {to}
      </NavLink>
    </li>
  );
};

export default Navlink;
