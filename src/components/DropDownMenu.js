import styled, { keyframes } from "styled-components";
import NavList from "./NavList";

const DropDown = ({ className }) => {
  return (
    <section className={`drop-down ${className}`}>
      <NavList />
    </section>
  );
};

const enter = keyframes`
  0% { transform: translateX(100px);}
  75% { transform: translateX(-25px);}
  100% { transform: translateX(10px);}
`;

const DropDownMenu = styled(DropDown)`
  &.drop-down {
    position: absolute;
    top: 50px;
    right: 19px;
    .nav-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: column;
      height: 15rem;
    }

    .icon {
      position: absolute;
      left: 10px;
    }
    .icon-home {
      animation: ${enter} 0.25s cubic-bezier(0.5, 0.05, 1, 0.5);
    }
    .icon-projects {
      animation: ${enter} 0.35s cubic-bezier(0.5, 0.05, 1, 0.5);
    }
    .icon-about {
      animation: ${enter} 0.45s cubic-bezier(0.5, 0.05, 1, 0.5);
    }

    .icon-contact {
      animation: ${enter} 0.55s cubic-bezier(0.5, 0.05, 1, 0.5);
    }
  }
`;

export default DropDownMenu;
