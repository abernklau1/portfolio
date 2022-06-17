import { NavLink } from "react-router-dom";

const Navlink = ({ to }) => {
  return (
    <li className="nav-items">
      <NavLink to={`/${to}`} className="nav-link">
        {to}
      </NavLink>
    </li>
  );
};

export default Navlink;
