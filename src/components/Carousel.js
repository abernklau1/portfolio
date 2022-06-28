import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import styled, { keyframes } from "styled-components";

const Car = ({ images }) => {
  let imgNum = 0;

  const nextImg = () => {
    let newImg = imgNum + 1;
    if (newImg > 2) {
      newImg = 0;
    }
  };

  const prevImg = () => {
    let newImg = imgNum - 1;
    if (newImg < 0) {
      newImg = 2;
    }
  };

  return (
    <section className="carousel" aria-label="Gallery">
      <div className="arrow-container">
        <button className="car-btn" onClick={prevImg}>
          <RiArrowLeftSLine />
        </button>
        <button className="car-btn" onClick={nextImg}>
          <RiArrowRightSLine />
        </button>
      </div>
      <ul className="car-view">
        {images.map((img, index) => {
          return (
            <li className="car_slide" key={index}>
              <img src={img} alt="Project" />
            </li>
          );
        })}
      </ul>
      <aside className="car-nav">
        <ul car-nav-list>
          {images.map((img, index) => {
            return (
              <li className="car-nav-item" key={index}>
                <button className="car-nav-btn">
                  <RiCheckboxBlankCircleLine />
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
};

const toNext = keyframes`
75% {
    left: 0;
}

95% {
    left: 100%
}

98% {
    left: 100%
}

99% {
    left: 0;
}
`;

const toStart = keyframes`
75% {
    left: 0;
}

95% {
    left: -300%
}

98% {
    left: -300%
}

99% {
    left: 0;
}
`;

const snap = keyframes`
96% {
    scroll-span-align: center;
}

97% {
    scroll-span-align: none;
}

99% {
    scroll-span-align: none;
}

100% {
    scroll-span-align: center;
}
`;

const Carousel = styled(Car)`
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &.carousel {
    position: relative;
    padding-top: 75%;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;

    .car-view {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      overflow-x: scroll;
      counter-reset: item;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }

    .car-slide {
      position: relative;
      flex: 0 0 100%;
      width: 100%;
      counter-increment: item;
    }
  }
`;
export default Carousel;
