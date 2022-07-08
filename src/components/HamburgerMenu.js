import styled, { keyframes } from "styled-components";
import DropDownMenu from "./DropDownMenu";
import { useAppContext } from "../context/appContext";

const Menu = ({ className }) => {
  const { showDropDown, toggleDropDown } = useAppContext();

  return (
    <div
      className={
        showDropDown ? `menu ${className} activated` : `menu ${className}`
      }
    >
      <button
        className="nav-tgl"
        type="button"
        aria-label="hamburger-menu"
        onClick={toggleDropDown}
      >
        <span aria-hidden="true"></span>
      </button>

      <DropDownMenu className={showDropDown ? "unhide" : "hide"} />
    </div>
  );
};

const enter = keyframes`
  0% { transform: translateX(100px);}
  75% { transform: translateX(-25px);}
  100% { transform: translateX(10px);}
`;

const HamburgerMenu = styled(Menu)`
  display: none;

  .hide,
  .unhide {
    position: fixed;
    top: 70px;
  }

  .hide a {
    .icon-home,
    .icon-projects,
    .icon-about,
    .icon-contact {
      transform: translateX(120px);
    }
    .icon-home {
      transition: transform 0.15s cubic-bezier(0.5, 0.05, 1, 0.5);
    }

    .icon-projects {
      transition: transform 0.3s cubic-bezier(0.5, 0.05, 1, 0.5);
    }

    .icon-about {
      transition: transform 0.45s cubic-bezier(0.5, 0.05, 1, 0.5);
    }

    .icon-contact {
      transition: transform 0.6s cubic-bezier(0.5, 0.05, 1, 0.5);
    }
  }

  .unhide a {
    .icon {
      position: absolute;
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

  .nav-tgl {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    top: 10px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    padding: 0;
    background: transparent;
    box-shadow: 0px 4px 24px rgba(#fff, 0.24);
    line-height: 0.6;
    text-align: center;
    span {
      display: inline-block;
      position: relative;
      height: 2px;
      width: 26px;
      border-radius: 1px;
      background: white;
      vertical-align: middle;

      &:before,
      &:after {
        display: inline-block;
        position: absolute;
        content: "";
        height: 2px;
        border-radius: 1px;
        background: white;
        transition: all 200ms;
      }

      &:before {
        top: -11px;
        left: 2px;
        width: 22px;
      }
      &:after {
        top: 11px;
        left: 5px;
        width: 16px;
      }
    }

    &:focus {
      outline: none;
    }

    &:hover > span:after,
    &:hover > span:before {
      width: 26px;
      left: 0;
    }
  }

  &.menu.activated {
    &:hover {
      .nav-tgl span {
        &:after,
        &:before {
          top: -1px;
          left: 2px;
          width: 26px;
        }
      }
    }
    .nav-tgl span {
      height: 0;
      &:after,
      &:before {
        top: -1px;
        left: 6px;
        width: 18px;
      }
      &:after {
        transform: rotate(-45deg);
      }
      &:before {
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: 1050px) {
    &.menu {
      display: inline;
    }
  }
`;

export default HamburgerMenu;
