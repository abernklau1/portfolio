import styled from "styled-components";
import LinkIcon from "./LinkIcon";
import Carousel from "./Carousel";
import { RiEyeFill } from "react-icons/ri";
import CarouselItem from "./CarouselItem";

function ProjectCard({
  title = "Banking App",
  images = [
    "bank-app-home.png",
    "bank-app-register.png",
    "bank-app-accounts.png",
  ],
  desc = "Very wonderful and beautifully made banking app",
  link = "https://github.com/abernklau1/Banking-App",
}) {
  return (
    <Wrapper>
      <div className="carousel-container">
        <Carousel>
          {images.map((img, index) => {
            return (
              <CarouselItem
                className="car_slide"
                key={index}
                id={index}
                img={img}
                width="100%"
              />
            );
          })}
        </Carousel>
      </div>
      <h4 className="project-title">{title}</h4>
      <div className="rule"></div>
      <p className="project-desc">{desc}</p>
      <LinkIcon
        icon={<RiEyeFill />}
        link={link}
        title="View Project"
        color="white"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: white;
  width: 20rem;
  text-align: left;
  border-radius: 5px;
  box-shadow: rgba(205, 205, 152, 0.25) 0px 4px 10px -2px,
    rgba(255, 255, 255, 0.3) 0px 2px 6px -2px;
  transition: margin-left 0.5s;

  * {
    margin: 10px auto;
  }

  img {
    width: 20rem;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  h4,
  p,
  a,
  .rule {
    margin-left: 15px;
  }

  .rule {
    border-top: 5px dotted #929aab;
    width: 20%;
  }

  &:hover {
    margin-left: 5px;
    box-shadow: rgba(205, 205, 152, 0.25) 0px 4px 10px 0,
      rgba(255, 255, 255, 0.3) 0px 2px 6px 0;
  }

  .carousel-container,
  .carousel-container > section {
    margin: 0;
  }
`;

export default ProjectCard;
