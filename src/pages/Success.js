import styled from "styled-components";

const Success = () => {
  return (
    <Wrapper>
      <h2>Success!</h2>
      <p>
        Thank you for your contact. I will get back to you as soon as I can!
      </p>
      <a href="/portfolio">return home</a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  width: 30rem;
  margin: auto;

  p {
    margin: 20px 0 10px;
  }

  a {
    color: #6c63ff;

    &:hover {
      opacity: 0.5;
    }
  }
`;
export default Success;
