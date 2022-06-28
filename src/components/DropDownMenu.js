import styled from "styled-components";
import NavList from "./NavList";

const DropDown = ({ className }) => {
  return (
    <section className={`drop-down ${className}`}>
      <NavList />
    </section>
  );
};

const DropDownMenu = styled(DropDown)`
  position: absolute;
  top: 50px;
  right: 0px;
  overflow: hidden;
  width: 6.5rem;
  height: 16rem;
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    height: 15rem;
  }
`;

export default DropDownMenu;
