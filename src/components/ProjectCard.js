import styled from "styled-components";
import LinkIcon from "./LinkIcon";
import Carousel from "./Carousel";
import { RiEyeFill } from "react-icons/ri";
import CarouselItem from "./CarouselItem";

function ProjectCard({ title, images, desc, link, techs }) {
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
      <div className="desc">
        <h4 className="project-title">{title}</h4>
        <div className="rule"></div>
        <p className="project-desc">{desc}</p>
        <div className="rule"></div>
        <h4>Tech:</h4>
        <div className="techs-container">
          {techs.map((tech, index) => {
            return (
              <div className="tech" key={index}>
                {tech}
              </div>
            );
          })}
        </div>
        <LinkIcon icon={<RiEyeFill />} link={link} title="View Project" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: #b3b3b3;
  width: 23rem;
  text-align: left;
  border-radius: 0 0 5px 5px;
  margin: 20px 0;
  box-shadow: rgba(205, 205, 152, 0.25) 0px 4px 10px -2px,
    rgba(255, 255, 255, 0.3) 0px 2px 6px -2px;
  transition: transform 0.5s, box-shadow 0.5s;

  * {
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 14rem;
    border-bottom: 1px solid white;
  }

  .rule {
    border-top: 5px dotted #620099;
    width: 20%;
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: rgba(205, 205, 152, 0.25) 0px 4px 10px 0,
      rgba(255, 255, 255, 0.3) 0px 2px 6px 0;
  }

  .desc,
  .desc > * {
    margin: 15px 5px;
  }

  .desc {
    padding-bottom: 1rem;
    margin-bottom: 0;
  }

  .techs-container {
    display: flex;
    justify-content: flex-start;
    margin: 0 0 20px;
    gap: 0.5rem;
    font-size: 20px;
    .tech {
      margin: 0 3px;
    }
  }

  @media (max-width: 650px) {
    margin: auto;
  }
`;

export default ProjectCard;
