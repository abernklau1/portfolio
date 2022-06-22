import NavList from "./NavList";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="nav-list-container">
          <NavList />
        </div>
        <HamburgerMenu />
      </nav>
    </section>
  );
};

export default NavBar;
