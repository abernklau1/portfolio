import { NavLink } from "react-router-dom";
import {
  RiHome4Line,
  RiCodeLine,
  RiUser3Line,
  RiWechatLine,
} from "react-icons/ri";
import NavIcon from "./NavIcon";

const icons = {
  home: <RiHome4Line />,
  projects: <RiCodeLine />,
  about: <RiUser3Line />,
  contact: <RiWechatLine />,
};

const Navlink = ({ to }) => {
  return (
    <li className="nav-items">
      <NavLink to={to === "home" ? "/" : `/${to}`} className="nav-link">
        {
          <NavIcon
            icon={icons[to]}
            type={to}
            title={to[0].toUpperCase() + to.substring(1)}
          />
        }
      </NavLink>
    </li>
  );
};

export default Navlink;
