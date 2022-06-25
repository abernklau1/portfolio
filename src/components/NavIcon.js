import { NavLink } from "react-router-dom";
import {
  RiHome4Line,
  RiCodeLine,
  RiUser3Line,
  RiWechatLine,
} from "react-icons/ri";
import Icon from "./styles/Icon";

const icons = {
  home: <RiHome4Line />,
  projects: <RiCodeLine />,
  about: <RiUser3Line />,
  contact: <RiWechatLine />,
};

const NavIcon = ({ to }) => {
  return (
    <li className="nav-items">
      <NavLink to={to === "home" ? "/" : `/${to}`} className="nav-link">
        {
          <Icon
            color="#666060"
            title={to[0].toUpperCase() + to.substring(1)}
            className={`icon-${to}`}
          >
            {icons[to]}
          </Icon>
        }
      </NavLink>
    </li>
  );
};

export default NavIcon;
