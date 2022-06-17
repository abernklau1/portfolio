import Navlink from "./Navlink";

const pages = ["home", "projects", "about", "contact"];

const NavList = () => {
  return (
    <ul className="nav-list">
      {pages.map((page, index) => {
        return <Navlink to={page} key={index} />;
      })}
    </ul>
  );
};

export default NavList;
