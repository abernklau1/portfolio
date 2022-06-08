import { Navbar, Footer } from ".";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default SharedLayout;
