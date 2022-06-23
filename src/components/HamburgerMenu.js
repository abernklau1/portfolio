import styled from "styled-components";
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

      <DropDownMenu className="hidden" />
    </div>
  );
};

const HamburgerMenu = styled(Menu)`
  display: none;

  .hidden {
    display: none;
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
    .nav-tgl span {
      height: 0;
      &:after,
      &:before {
        top: -1px;
        left: 0px;
        width: 26px;
      }
      &:after {
        transform: rotate(-45deg);
      }
      &:before {
        transform: rotate(45deg);
      }
    }

    .hidden {
      display: inline;
    }
  }

  @media (max-width: 1050px) {
    &.menu {
      display: inline;
    }
  }
`;

export default HamburgerMenu;
