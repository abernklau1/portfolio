import styled from "styled-components";

const InputLabel = styled.label.attrs((props) => ({
  for: props.name,
}))`
  content: ${(props) => props.name};
`;

export default InputLabel;
