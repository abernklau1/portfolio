import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const projects = {
  webdev: [
    {
      title: "Banking App",
      img: "home-page.png",
      desc: "Very wonderful and beautifully made banking app",
      link: "https://github.com/abernklau1/Banking-App",
    },
  ],
  datasci: [{}],
  software: [{}],
  games: [{}],
};

const Projects = ({ className }) => {
  return (
    <Wrapper>
      <div className="content-container">
        <h2>Web Development</h2>
        <div className="projects-container">
          <ProjectCard />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #fff;
  text-align: left;
  padding: 5rem 0 0 2rem;
  .projects-container {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Projects;
