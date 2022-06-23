import styled from "styled-components";

const projects = ({ className }) => {
  return <section className={`projects ${className}`}>Projects</section>;
};

const Projects = styled(projects)`
  /* background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(26, 26, 32, 1) 0%,
      rgba(0, 0, 0, 1) 30%
    ); */
  background: black;
  height: 100vh;
`;

export default Projects;
