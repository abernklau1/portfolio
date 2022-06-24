import NavIcon from "./NavIcon";

const pages = ["home", "projects", "about", "contact"];

const NavList = () => {
  return (
    <ul className="nav-list">
      {pages.map((page, index) => {
        return <NavIcon to={page} key={index} />;
      })}
    </ul>
  );
};

export default NavList;
