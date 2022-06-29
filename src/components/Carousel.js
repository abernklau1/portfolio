import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import styled from "styled-components";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Car = ({ images, className }) => {
  const ref = useRef(null);

  return (
    <section className={className} aria-label="Gallery">
      <div className="arrow-container">
        <button
          className="car-btn"
          onClick={() => {
            ref.current.scrollBy({
              left: -ref.current.clientWidth,
              behavior: "smooth",
            });
          }}
        >
          <RiArrowLeftSLine size={30} />
        </button>
        <button
          className="car-btn"
          onClick={() => {
            ref.current.scrollBy({
              left: ref.current.clientWidth,
              behavior: "smooth",
            });
          }}
        >
          <RiArrowRightSLine size={30} />
        </button>
      </div>
      <ul className="car-view">
        {images.map((img, index) => {
          return (
            <li className="car_slide" key={index} id={index}>
              <img src={img} alt="Project" />
            </li>
          );
        })}
      </ul>
      <aside className="car-nav">
        <ul className="car-nav-list">
          {images.map((img, index) => {
            return (
              <li className="car-nav-item" key={index}>
                <NavLink className="car-nav-btn" to={`#${index}`}>
                  <RiCheckboxBlankCircleFill />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
};

const Carousel = styled(Car)`
  position: relative;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;

  .arrow-container {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 25%;

    button {
      border: none;
      background: transparent;
    }
  }

  .car-view {
    display: flex;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }

  .car-slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
  }

  .car-nav {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    .car-nav-btn {
      border: none;
      background: transparent;
      color: darkgray;
      opacity: 0.7;
    }
    .active {
      opacity: 1;
    }
  }
`;
export default Carousel;
