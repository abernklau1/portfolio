import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const projects = {
  webdev: [
    {
      title: "Banking App",
      img: "home-page.png",
      desc: "Very wonderful and beautifully made banking app",
      link: "",
    },
  ],
  datasci: [{}],
  software: [{}],
  games: [{}],
};

const Projects = ({ className }) => {
  return (
    <Wrapper>
      <h2>Web Development</h2>
      <div className="projects-container">
        <ProjectCard />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: black;
  height: 100vh;
  color: #fff;
  text-align: left;
  .projects-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Projects;
