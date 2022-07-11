import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import styled from "styled-components";
import React, { useState } from "react";

const Car = ({ children, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <section className={className}>
      <div
        className="car-view"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="arrow-container">
        <button
          className="car-btn"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <RiArrowLeftSLine />
        </button>
        <button
          className="car-btn"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <RiArrowRightSLine />
        </button>
      </div>
      <div className="car-nav">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={
                activeIndex === index ? "active car-nav-btn" : "car-nav-btn"
              }
              onClick={() => {
                updateIndex(index);
              }}
            >
              <RiCheckboxBlankCircleFill />
            </button>
          );
        })}
      </div>
    </section>
  );
};

const Carousel = styled(Car)`
  position: relative;
  overflow: hidden;

  padding-bottom: 12px;

  * {
    margin: 0;
  }

  .car-view {
    transition: transform 0.3s;
    white-space: nowrap;
    margin: 0;
  }

  .car-slide {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .arrow-container {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 35%;

    button {
      color: #7300b3;
      margin: 0;
      opacity: 0.3;
      border: none;
      background: transparent;
      font-size: 30px;
      width: 2.5rem;
      height: 3rem;

      &:hover {
        * {
          margin-top: 2px;
        }
        opacity: 1;
        font-size: 36px;
      }
    }
  }

  .car-nav {
    position: absolute;
    display: flex;
    right: 50%;
    left: 40%;
    text-align: center;

    .car-nav-btn {
      border: none;
      background: transparent;
      color: #7300b3;
      opacity: 0.5;
      margin: 0 5px;
      font-size: 10px;
      * {
        margin: auto;
      }
    }
    .active {
      opacity: 1;
    }
  }
`;
export default Carousel;
