import styled from "styled-components";
import DataScience from "../components/DataScience";
import WebDev from "../components/WebDev";

const Projects = ({ className }) => {
  return (
    <Wrapper>
      <div className="content-container">
        <h2>Web Development</h2>
        <WebDev />
        <h2>Data Science</h2>
        <DataScience />
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
    gap: 2rem;
  }
`;

export default Projects;
