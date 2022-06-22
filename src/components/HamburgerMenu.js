import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const Menu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={showMenu ? `menu ${className} activated` : `menu ${className}`}
    >
      <button
        className="nav-tgl"
        type="button"
        aria-label="hamburger-menu"
        onClick={handleClick}
      >
        <span aria-hidden="true"></span>
        {/* <DropDownMenu /> */}
      </button>
    </div>
  );
};

const HamburgerMenu = styled(Menu)`
  &.menu {
    display: none;
  }

  .nav-tgl {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    right: 30px;
    top: 10px;
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
  }

  @media (max-width: 1050px) {
    &.menu {
      display: inline;
    }
  }
`;

export default HamburgerMenu;
