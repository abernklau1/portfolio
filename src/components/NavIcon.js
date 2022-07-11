import { NavLink } from "react-router-dom";
import {
  RiHome4Line,
  RiCodeLine,
  RiUser3Line,
  RiWechatLine,
} from "react-icons/ri";
import Icon from "./styles/Icon";
import { useAppContext } from "../context/appContext";

const icons = {
  home: <RiHome4Line />,
  projects: <RiCodeLine />,
  about: <RiUser3Line />,
  contact: <RiWechatLine />,
};

const NavIcon = ({ to }) => {
  const { showDropDown } = useAppContext();

  return (
    <li className="nav-items">
      <NavLink to={to === "home" ? "/" : `/${to}`} className="nav-link">
        {
          <Icon
            title={to[0].toUpperCase() + to.substring(1)}
            className={`icon-${to}`}
          >
            {icons[to]}
          </Icon>
        }
        {!showDropDown && <p className="nav-title">{to}</p>}
      </NavLink>
    </li>
  );
};

export default NavIcon;
