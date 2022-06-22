import NavList from "./NavList";
import HamburgerMenu from "./HamburgerMenu";
import SocialIconContainer from "./SocialIconContainer";

const NavBar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <SocialIconContainer />
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
