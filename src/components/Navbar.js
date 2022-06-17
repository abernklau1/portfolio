import NavList from "./NavList";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="nav-list-container">
          <NavList />
        </div>
        <button className="bars">
          <AiOutlineMenu size={40} />
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
