import styled from "styled-components";
import LinkIcon from "./LinkIcon";
import { RiEyeFill } from "react-icons/ri";

function ProjectCard({
  title = "Banking App",
  img = "home-page.png",
  desc = "Very wonderful and beautifully made banking app",
  link = "https://github.com/abernklau1/Banking-App",
}) {
  return (
    <Wrapper>
      <img className="project-img" src={img} alt={title + " Image"} />
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
  //border: 1px solid white;
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
`;

export default ProjectCard;
